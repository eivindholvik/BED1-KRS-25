using System;
using AnimalsOOPClass.Animals.Interfaces;

namespace AnimalsOOPClass.Animals.Birds
{
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
      System.Console.WriteLine("but it doesnt sould like the movies, because it is a redtail hawk");
    }

    public void Fly()
    {
      System.Console.WriteLine($"{Name} soars high above");
    }

    public void Swim()
    {
      System.Console.WriteLine($"{Name} dives in and uses his winds as finns - terrifying the local fish");
    }

  }
}