using AnimalsOOPClass.Animals.Interfaces;

namespace AnimalsOOPClass.Animals.Birds;

public class Penguine : Bird, ISwimmable
{
  public int TopSpeed {get;}

  public Penguine(string name, int wingSpanCm, int topSpeed) : base(name, wingSpanCm)
  {
    TopSpeed = topSpeed;
  }

  public void SlideIntoDM()
  {
    System.Console.WriteLine($"{Name} kidnaps all the small penguines for his own island");
  }

  public override void MakeNoise()
  {
    System.Console.WriteLine($"{Name} makes a noise that makes you question reality");
  }

  public void Swim()
  {
    System.Console.WriteLine($"{Name} glides effortlesly though the water with a top speed of {TopSpeed}");
  }
}