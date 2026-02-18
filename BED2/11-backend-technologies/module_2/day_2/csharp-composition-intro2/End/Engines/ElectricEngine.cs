using System;

namespace CompositionDemo.End.Engines;

public class ElectricEngine : IEngine
{
  public int ChargePercent {get;}

  public ElectricEngine(int chargePercent = 100)
  {
    ChargePercent = chargePercent;
  }

  public void Start()
  {
    System.Console.WriteLine($"The electric engine hums into existence");
    System.Console.WriteLine($"There is {ChargePercent}% battert remianing");
  }

  public void Fire()
  {
    System.Console.WriteLine("The battery catches fire");
    System.Console.WriteLine("There will be an explotion");
  }
}