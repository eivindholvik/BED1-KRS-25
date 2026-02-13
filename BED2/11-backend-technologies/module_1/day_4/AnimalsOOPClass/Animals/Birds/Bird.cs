using System;

namespace AnimalsOOPClass.Animals.Birds
{
  public abstract class Bird : Animal
  {
    public int WingSpanCm {get;}

    public Bird(string name, int wingSpanCm) : base(name)
    {
      WingSpanCm = wingSpanCm;
    }

    public void MakeNest()
    {
      System.Console.WriteLine($"{Name} is making a nest");
    }

    public override void MakeNoise()
    {
     System.Console.WriteLine($"{Name} squawks loudly"); 
    }

  }
}