using Start = CompositionDemo.Start;
using End = CompositionDemo.End;
using CompositionDemo.End.Engines;

public class Program
{
  public static void Main(string[] args)
  {
    Start.Car myCar = new Start.Car("Audi A4", new Start.Engine("Petrol"));
    myCar.StartCar();
    Start.Car myECar = new Start.Car("Y", new Start.Engine("Eletrical"));
    myECar.StartCar();

    System.Console.WriteLine("------------------");

    IEngine elecEngine = new ElectricEngine();
    End.Car car = new End.Car("Tesla Model X", elecEngine);
    car.StartCar();
    if(elecEngine is ElectricEngine elecEng)
    {
      elecEng.Fire();
    }
    

    End.Car truck = new End.Car("Toyota Hilux", new DieselEngine(50));
    truck.StartCar();

  }
}