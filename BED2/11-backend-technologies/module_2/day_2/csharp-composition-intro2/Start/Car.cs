using System;


namespace CompositionDemo.Start;

public class Car
{
  public string Model{ get;}

  public Engine Engine {get;}

  public Car(string model, Engine engine)
  {
    Model = model;
    Engine = engine;
  }

  public void StartCar()
  {
    System.Console.WriteLine("The battery rele is switched on");
    Engine.Start();
  }


  
}