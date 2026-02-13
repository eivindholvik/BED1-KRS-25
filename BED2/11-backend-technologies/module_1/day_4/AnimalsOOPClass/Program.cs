using AnimalsOOPClass.Animals.Interfaces;
using AnimalsOOPClass.Animals.Birds;
using AnimalsOOPClass.Animals.Mammals;
using Microsoft.VisualBasic;

internal class Program
{
  private static void Main(string[] args)
  {
    // This does not work, as we do not intend to create animals without a subclass
    // Animal myMistakeAnimal = new Animal("Leif");
    // System.Console.WriteLine(myMistakeAnimal.Name);

    //using static for Animal
    // Animal.Reproduce();

    Dog pluto = new Dog("Pluto", true, "Disnet Special");
    // pluto.Run(); //Dog : Runnable
    // pluto.MakeNoise(); //Animal
    // pluto.NurseYoung(); //Mammal
    // pluto.Play(); //Dog
    

    Eagle eagly = new Eagle("Eagly the Prime Eagle", 100, true);
    // // eagly.DiveBomb(); // Eagle - not implemented (?)
    // eagly.Fly(); // IFlyable - eagle
    // eagly.MakeNest(); // Bird
    // eagly.MakeNoise();

    //pauly
    // pauly the emeror
    // 60 wingspan
    // 25 top speed
    Penguine pauly = new Penguine("Pauly the Emperor", 60, 25);

    // pauly.Eat();
    // pauly.MakeNoise();
    // pauly.SlideIntoDM();
    // pauly.MakeNest();

    List<ISwimmable> swimmers = new List<ISwimmable>();
    swimmers.Add(pauly);
    swimmers.Add(eagly);
    swimmers.Add(pluto);

    foreach(var swimmer in swimmers)
    {
      swimmer.Swim();
      if(swimmer is IFlyable flyer)
      {
        flyer.Fly();
      }
    } 



  }
}