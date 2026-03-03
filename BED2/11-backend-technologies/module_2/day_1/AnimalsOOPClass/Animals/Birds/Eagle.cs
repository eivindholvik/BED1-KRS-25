using AnimalsOOPClass.Animals.Interfaces;

namespace AnimalsOOPClass.Animals.Birds;

public class Eagle : Bird, IFlyable, ISwimmable
{
  public bool IsBald {get; set;}

  public Eagle(string name, int wingSpanCm, bool isBald) : base(name, wingSpanCm)
  {
    IsBald = isBald;
  }

  public override void MakeNoise()
  {
    base.MakeNoise();
    System.Console.WriteLine("but it doesnt sound like the movies, ecause it is a redtal hawk");
  }

  public void Fly()
  {
    System.Console.WriteLine($"{Name} soars high above");
  }

  public void Swim()
  {
    System.Console.WriteLine($"{Name} dives in and uses his wings as finns - terrifying the local fish");
  }

}