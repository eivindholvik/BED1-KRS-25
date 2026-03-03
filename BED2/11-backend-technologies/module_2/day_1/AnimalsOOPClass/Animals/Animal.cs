namespace AnimalsOOPClass.Animals
{
  public abstract class Animal
  {
    public string Name {get;}

    public Animal(string name)
    {
      Name = name;
    }

    public virtual void Eat()
    {
      System.Console.WriteLine($"{Name} is eating");
    }

    public abstract void MakeNoise();

  }
}