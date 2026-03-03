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
    optionsBuilder.UseSqlite("Data Source=cafe.db");
  }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<Category>().Property(c => c.Name).IsRequired();
  }
   
}