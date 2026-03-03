## 0) What we’re building

A console app that:

- defines C# classes (entities)
- EF Core turns them into tables (code-first)
- inserts sample data (seeding)
- runs queries (LINQ) and prints results

> This is very close to the lecture in class - with minor differences and some more LINQ

---

## 1) Create the project

```bash
dotnet new console -n CafeInventory
cd CafeInventory
```

Why: a simple console app is the smallest place to learn EF Core without web stuff.

---

## 2) Add EF Core packages (SQLite)

```bash
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Sqlite
dotnet add package Microsoft.EntityFrameworkCore.Design
```

Why:

- `EntityFrameworkCore` = the ORM
- `Sqlite` = database provider
- `Design` = tooling support (migrations, etc.)

---

## 3) Create folders (industry-ish structure)

Create these folders inside the project:

```text
Domain/Entities
Data
Services
```

Why:

- **Domain**: your business objects (entities)
- **Data**: EF Core DbContext + seeding
- **Services**: query/report logic (keeps Program.cs clean)

---

## 4) Create the entity classes (tables)

### Domain/Entities/Category.cs

```csharp
namespace CafeInventory.Domain.Entities;

public class Category
{
    public int Id { get; set; }                 // Primary key
    public string Name { get; set; } = null!;   // Required name

    public List<Product> Products { get; set; } = new(); // 1-to-many navigation
}
```

Why:

- `Id` becomes the table primary key by convention.
- `Products` says “one category has many products”.

### Domain/Entities/Product.cs

```csharp
namespace CafeInventory.Domain.Entities;

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public decimal Price { get; set; }
    public int StockQuantity { get; set; }

    public int CategoryId { get; set; }         // Foreign key (required)
    public Category Category { get; set; } = null!; // Navigation back to Category
}
```

Why:

- `CategoryId` makes the relationship **required** (not nullable int).
- `Category` lets you do `Include(p => p.Category)` later.

### Domain/Entities/Order.cs

```csharp
namespace CafeInventory.Domain.Entities;

public class Order
{
    public int Id { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public List<OrderItem> Items { get; set; } = new();
}
```

Why:

- An order has many order items.

### Domain/Entities/OrderItem.cs

```csharp
namespace CafeInventory.Domain.Entities;

public class OrderItem
{
    public int Id { get; set; }

    public int OrderId { get; set; }
    public Order Order { get; set; } = null!;

    public int ProductId { get; set; }
    public Product Product { get; set; } = null!;

    public int Quantity { get; set; }
    public decimal UnitPriceAtOrder { get; set; }
}
```

Why:

- `OrderItem` is the “line item” table.
- `UnitPriceAtOrder` stores price at time of purchase (prices can change later).

---

## 5) Create the DbContext (the EF “database manager”)

### Data/AppDbContext.cs

```csharp
using CafeInventory.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CafeInventory.Data;

public class AppDbContext : DbContext
{
    public DbSet<Category> Categories => Set<Category>();
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Order> Orders => Set<Order>();
    public DbSet<OrderItem> OrderItems => Set<OrderItem>();

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // Creates/opens a local file called cafe.db
        optionsBuilder.UseSqlite("Data Source=cafe.db");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // A couple of “make it explicit” rules (good habit)
        modelBuilder.Entity<Category>()
            .Property(c => c.Name)
            .IsRequired();

        modelBuilder.Entity<Product>()
            .Property(p => p.Name)
            .IsRequired();

        modelBuilder.Entity<Product>()
            .Property(p => p.Price)
            .HasColumnType("decimal(10,2)");
    }
}
```

Why:

- `DbContext` represents a session with the DB.
- `DbSet<T>` represents a table.
- `UseSqlite(...)` points EF to the SQLite file.

#### Why we don’t add `.HasKey` here

EF Core conventions:

- A property named **`Id`** or **`<TypeName>Id`** is automatically treated as the **primary key**.
    - `Category.Id` → PK
    - `Product.Id` → PK
    - `Order.Id` → PK
    - `OrderItem.Id` → PK

So this:

```csharp
public int Id { get; set; }
```

is enough for EF to do:

- `PRIMARY KEY (Id)`
- usually `INTEGER PRIMARY KEY` (SQLite) / `AUTO_INCREMENT` (MySQL) depending on provider

#### When you _should_ use `.HasKey(...)`

Use it when the key is **not** conventional or you need something special:

1. **Composite key** (multiple columns)

```csharp
modelBuilder.Entity<OrderItem>()
    .HasKey(oi => new { oi.OrderId, oi.ProductId });
```

2. **Different key name**

```csharp
public int CategoryKey { get; set; } // not Id
```

Then:

```csharp
modelBuilder.Entity<Category>()
    .HasKey(c => c.CategoryKey);
```

3. **Keyless entity** (read-only query types / views)

```csharp
modelBuilder.Entity<SalesReport>().HasNoKey();
```

#### Why we _did_ make some things explicit (like `.IsRequired()` / decimal)

Those are areas where conventions can be unclear or provider-specific:

- **Required strings**: depends on nullable reference types + config, so being explicit avoids surprises.
- **Decimal**: some providers (esp. MySQL/SQL Server) benefit from explicitly setting precision/scale.

So: we skip `.HasKey` because EF already knows; we add rules where defaults can vary or cause bugs.

---

## 6) Seed sample data (only if empty)

### Data/SeedData.cs

```csharp
using CafeInventory.Domain.Entities;

namespace CafeInventory.Data;

public static class SeedData
{
    public static void EnsureSeeded(AppDbContext db)
    {
        // Creates the database + tables if they don’t exist
        db.Database.EnsureCreated();

        // Don’t re-seed every run
        if (db.Products.Any()) return;

        var drinks = new Category { Name = "Drinks" };
        var pastries = new Category { Name = "Pastries" };
        var sandwiches = new Category { Name = "Sandwiches" };

        db.Categories.AddRange(drinks, pastries, sandwiches);

        var products = new List<Product>
        {
            new() { Name = "Americano", Price = 3.50m, StockQuantity = 20, Category = drinks },
            new() { Name = "Latte", Price = 4.20m, StockQuantity = 3, Category = drinks },
            new() { Name = "Croissant", Price = 2.80m, StockQuantity = 10, Category = pastries },
            new() { Name = "Muffin", Price = 2.50m, StockQuantity = 2, Category = pastries },
            new() { Name = "Chicken Panini", Price = 6.90m, StockQuantity = 6, Category = sandwiches },
            new() { Name = "Veggie Wrap", Price = 5.90m, StockQuantity = 4, Category = sandwiches },
        };

        db.Products.AddRange(products);
        db.SaveChanges();

        var order1 = new Order { CreatedAt = DateTime.UtcNow.AddDays(-1) };
        var order2 = new Order { CreatedAt = DateTime.UtcNow };

        db.Orders.AddRange(order1, order2);
        db.SaveChanges();

        db.OrderItems.AddRange(
            new OrderItem { OrderId = order1.Id, ProductId = products[0].Id, Quantity = 2, UnitPriceAtOrder = products[0].Price },
            new OrderItem { OrderId = order1.Id, ProductId = products[2].Id, Quantity = 1, UnitPriceAtOrder = products[2].Price },

            new OrderItem { OrderId = order2.Id, ProductId = products[1].Id, Quantity = 1, UnitPriceAtOrder = products[1].Price },
            new OrderItem { OrderId = order2.Id, ProductId = products[4].Id, Quantity = 2, UnitPriceAtOrder = products[4].Price },
            new OrderItem { OrderId = order2.Id, ProductId = products[5].Id, Quantity = 1, UnitPriceAtOrder = products[5].Price }
        );

        db.SaveChanges();
    }
}
```

Why:

- `EnsureCreated()` is the quickest “create DB from code”
- `Any()` prevents duplicate seed inserts.

---

## 7) Add a service to hold queries (LINQ)

### Services/ReportsService.cs

```csharp
using CafeInventory.Data;
using Microsoft.EntityFrameworkCore;

namespace CafeInventory.Services;

public class ReportsService
{
    private readonly AppDbContext _db;
    public ReportsService(AppDbContext db) => _db = db;

    public void PrintAllProductsWithCategory()
    {
        var rows = _db.Products
            .Include(p => p.Category) // loads the related category
            .OrderBy(p => p.Category.Name)
            .ThenBy(p => p.Name)
            .Select(p => new
            {
                p.Name,
                p.Price,
                p.StockQuantity,
                Category = p.Category.Name
            })
            .ToList();

        Console.WriteLine("== Products ==");
        foreach (var r in rows)
            Console.WriteLine($"{r.Category} | {r.Name} | {r.Price:C} | Stock: {r.StockQuantity}");
        Console.WriteLine();
    }

    public void PrintLowStock()
    {
        var rows = _db.Products
            .Where(p => p.StockQuantity < 5)
            .OrderBy(p => p.StockQuantity)
            .Select(p => new { p.Name, p.StockQuantity })
            .ToList();

        Console.WriteLine("== Low stock (<5) ==");
        foreach (var r in rows)
            Console.WriteLine($"{r.Name} | Stock: {r.StockQuantity}");
        Console.WriteLine();
    }

    public void PrintRevenuePerOrder()
    {
        var rows = _db.Orders
            .Include(o => o.Items)
            .Select(o => new
            {
                o.Id,
                o.CreatedAt,
                Revenue = o.Items.Sum(i => i.Quantity * i.UnitPriceAtOrder)
            })
            .OrderBy(o => o.Id)
            .ToList();

        Console.WriteLine("== Revenue per order ==");
        foreach (var r in rows)
            Console.WriteLine($"Order {r.Id} | {r.CreatedAt:u} | Revenue: {r.Revenue:C}");
        Console.WriteLine();
    }

    public void PrintTop3BestSellers()
    {
        var rows = _db.OrderItems
            .Include(i => i.Product)
            .GroupBy(i => i.Product.Name)
            .Select(g => new { Product = g.Key, Qty = g.Sum(x => x.Quantity) })
            .OrderByDescending(x => x.Qty)
            .Take(3)
            .ToList();

        Console.WriteLine("== Top 3 best sellers ==");
        foreach (var r in rows)
            Console.WriteLine($"{r.Product} | Qty sold: {r.Qty}");
        Console.WriteLine();
    }
}
```

Why:

- `Include(...)` loads related data.
- `Select(new { ... })` shapes output without returning full entities.
- Grouping/summing shows “real” reporting queries.

---

## 8) Wire it up in Program.cs

### Program.cs

```csharp
using CafeInventory.Data;
using CafeInventory.Services;

using var db = new AppDbContext();
SeedData.EnsureSeeded(db);

var reports = new ReportsService(db);

reports.PrintAllProductsWithCategory();
reports.PrintLowStock();
reports.PrintRevenuePerOrder();
reports.PrintTop3BestSellers();
```

Why:

- Keep Program.cs as the “script runner” of the app.
- Create context → seed → run reports.

---

## 9) Run it

```bash
dotnet run
```

You should see printed sections for products, low stock, revenue per order, and top sellers. A `cafe.db` file will appear in the project folder.
