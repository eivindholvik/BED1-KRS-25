using System;

namespace AnimalsOOPClass.Animals.Mammals
{
  public abstract class Mammal : Animal
  {
    public bool HasFur {get;}

    public Mammal(string name, bool hasFur) : base(name)
    {
      HasFur = hasFur;
    }

    public void NurseYoung()
    {
      System.Console.WriteLine($"{Name} is nursing their young");
    }

  }
}