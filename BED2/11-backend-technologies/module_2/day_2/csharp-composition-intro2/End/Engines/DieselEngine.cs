using System;

namespace CompositionDemo.End.Engines;

public class DieselEngine : IEngine
{
  public int FeulCapacityLtr {get;}

  public DieselEngine(int fuelCapacityLtr)
  {
    FeulCapacityLtr = fuelCapacityLtr;
  }

  public void Start()
  {
    System.Console.WriteLine($"The diesel engine warms up (little worm)");
    System.Console.WriteLine($"The car hums life and sounds like a tractor");
    System.Console.WriteLine($"There is {FeulCapacityLtr} liters of fuel in the tank");
  }
}