using System;


namespace AnimalsOOPClass.Animals
{
  public abstract class Animal
  {
    public string Name {get;}

    public Animal(string name)
    {
      Name = name;
    }

    public static void Reproduce(Animal female, Animal male)
    {
      System.Console.WriteLine($"{female.Name} is reproducing with {male.Name}");
    }

    public virtual void Eat()
    {
      System.Console.WriteLine($"{Name} is eating");
    }

    public abstract void MakeNoise();
  }
}