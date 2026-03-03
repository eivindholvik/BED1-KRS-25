using System.Net.Http.Headers;

namespace CafeInventory.Domain.Entities;

public class Category
{
  public int Id {get ;set;}
  public string Name {get; set;}
  public List<Product> Products {get; set;} = new();
}