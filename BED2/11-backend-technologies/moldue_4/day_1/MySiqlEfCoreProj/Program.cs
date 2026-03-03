using Microsoft.EntityFrameworkCore;
using System;
using System.Text;

namespace MySiqlEfCoreProj;

class Program
{
  static void Main(string[] args)
  {
    InsertTools();
    PrintTools();
  }

  private static void InsertTools()
  {
    using (var context = new HardwareStoreContext())
    {
      context.Database.EnsureCreated();

      if(context.Brand.Any()) return;

      var boschBrand = new Brand {Name = "Bosch"};
      context.Brand.Add(boschBrand);

      var categoryHandTool = new Category {Name = "Hand Tool"};
      var categoryPowerTool = new Category {Name = "Power Tool"};

      context.Tool.Add( new Tool {ID = "B123", Name = "Hammer", Price = 80.00, Brand = boschBrand, Category = categoryHandTool});
      context.Tool.Add( new Tool {ID = "B546", Name = "Circular Saw", Price = 500.00, Brand = boschBrand, Category = categoryPowerTool});
      context.Tool.Add( new Tool {ID = "B357", Name = "Impact Driver", Price = 750.00, Brand = boschBrand, Category = categoryPowerTool});

      context.SaveChanges();
    }
  }

  private static void PrintTools()
  {
    using (var context = new HardwareStoreContext())
    {
      var tools = context.Tool.Include(b => b.Brand).Include(b => b.Category);
      foreach (var tool in tools)
      {
        var data = new StringBuilder();
        data.AppendLine($"ID: {tool.ID}");
        data.AppendLine($"Name: {tool.Name}");
        data.AppendLine($"Price: {tool.Price}");
        data.AppendLine($"Brand: {tool.Brand.Name}");
        data.AppendLine($"Category: {tool.Category.Name}");
        System.Console.WriteLine(data.ToString());
      }
    }
  }

}