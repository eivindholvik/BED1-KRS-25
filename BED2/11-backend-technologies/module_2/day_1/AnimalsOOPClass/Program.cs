using AnimalsOOPClass.Animals;
using AnimalsOOPClass.Animals.Birds;
using AnimalsOOPClass.Animals.Interfaces;
using AnimalsOOPClass.Animals.Mammals;
using Microsoft.VisualBasic;

internal class Program
{
  public static void Main(string[] args)
    {
      List<Animal> animals = new List<Animal>();
      animals.Add(new Dog("Pluto", true, "Disney Special"));
      animals.Add(new Eagle("Eagly the Prime Eagle", 100, true));
      animals.Add(new Penguine("Pauly the Emperor", 60, 25));


      // Dog pluto = new Dog("Pluto", true, "Disney Special");
      // pluto.MakeNoise();
      // pluto.NurseYoung();
      // pluto.Play();

      // Eagle eagly = new Eagle("Eagly the Prime Eagle", 100, true);
      // eagly.Swim();
      // eagly.MakeNest();
      // eagly.Eat();
      // eagly.MakeNoise();

      // Penguine pauly = new Penguine("Pauly the Emperor", 60, 25);
      // pauly.Eat();
      // pauly.MakeNest();
      // pauly.MakeNoise();
      // pauly.SlideIntoDM();

      List<ISwimmable> swimmers = new List<ISwimmable>();
      // swimmers.Add(pauly);
      // swimmers.Add(eagly);
      // swimmers.Add(pluto);

      foreach(Animal animal in animals)
      {
        if(animal is Dog dog)
      {
        dog.MakeNoise();
      }
        // if(animal is ISwimmable swimmer)
        // {
        //   swimmers.Add(swimmer);
        // }
      }


      // swimmers[2].Swim();

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

