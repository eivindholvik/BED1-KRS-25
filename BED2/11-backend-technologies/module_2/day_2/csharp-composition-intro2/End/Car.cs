using System;
using CompositionDemo.End.Engines;

namespace CompositionDemo.End;

public class Car
{
  public string Model {get;}
  public IEngine Engine {get;}

  public Car(string model, IEngine engine)
  {
    Model = model;
    Engine = engine;
  }

  public void StartCar()
  {
    Engine.Start();
  }


}