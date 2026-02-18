using System;

namespace CompositionDemo.Start;

public class Engine
{
  public string FuelType {get;}

  public Engine(string fuelType)
  {
    FuelType = fuelType;
  }

  public void Start()
  {
    System.Console.WriteLine($"The {FuelType} engine is starting, brr brr");
  }
}