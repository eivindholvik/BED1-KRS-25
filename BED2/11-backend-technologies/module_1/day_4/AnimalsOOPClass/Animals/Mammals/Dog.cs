using System;
using AnimalsOOPClass.Animals.Interfaces;

namespace AnimalsOOPClass.Animals.Mammals
{
  public class Dog : Mammal, ISwimmable, IRunnable
  {
    public string Breed {get;}

    public Dog(string name, bool hasFur, string breed) : base(name, hasFur)
    {
      Breed = breed;
    }

    public void Play()
    {
      System.Console.WriteLine($"{Name} is playing with a ball");
    }

    public override void Eat()
    {
      base.Eat();
      System.Console.WriteLine("The food is kibllets");
    }

    public override void MakeNoise()
    {
      System.Console.WriteLine($"{Name} barks");
    }

    public void Swim() // From ISwimmable
    {
      System.Console.WriteLine($"{Name} dives in");
    }

    public void Run() // Soon to be from IRunnable
    {
      System.Console.WriteLine($"{Name} gallops furiously");
    }

    


  }
}