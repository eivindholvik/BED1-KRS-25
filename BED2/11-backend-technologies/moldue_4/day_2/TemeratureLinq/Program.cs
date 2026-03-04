using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Security.Cryptography.X509Certificates;

internal class Program
{
  private static void Main(string[] args)
  {
    System.Console.WriteLine("Hello, World!");
    
    List<int> temperatures = new List<int>();
    Random rng = new Random();

    for(int i = 0; i < 20; i++)
    {
      temperatures.Add(rng.Next(-20, 120));
    }

    System.Console.WriteLine("All temperatures:");
    System.Console.WriteLine(string.Join(", ", temperatures));
    System.Console.WriteLine();
    
    var freezing = GetFreezingTemps(temperatures);
    System.Console.WriteLine("Freezing temperatures:");
    System.Console.WriteLine(string.Join(", ", freezing));
    System.Console.WriteLine();

    var boiling = GetBoilingTemps(temperatures);
    System.Console.WriteLine("Boiling temperatures:");
    System.Console.WriteLine(string.Join(", ", boiling));
    System.Console.WriteLine();

    var freezingLINQ = temperatures.Where(t => t < 0).ToList();
    System.Console.WriteLine("Freezing (LINQ):");
    System.Console.WriteLine(string.Join(", ", freezingLINQ));

    var boilingLINQ = temperatures.Where(t => t > 100).ToList();
    System.Console.WriteLine("Boiling (LINQ):");
    System.Console.WriteLine(string.Join(", ", boilingLINQ));
    System.Console.WriteLine();

    var niceTemperaturesLINQ = temperatures.Where(t => t > 20).Where(t => t < 35).ToList();

    System.Console.WriteLine("Nice Temperatures (LINQ):");
    System.Console.WriteLine(string.Join(", ", niceTemperaturesLINQ));
    System.Console.WriteLine();


    #region Delegates
    TemperatureCheck freezingDelegate = FreezingCheck;

    var freezingTempsDelegate = TemperatureFilter(temperatures, freezingDelegate);
  
    Console.WriteLine("Freezing (delegate):");
    Console.WriteLine(string.Join(", ", freezingTempsDelegate));
    Console.WriteLine();

    TemperatureCheck boilingDelegate = t => t > 100;
    var boilingTempsDelegate = TemperatureFilter(temperatures, boilingDelegate);
  
    Console.WriteLine("Boiling (delegate):");
    Console.WriteLine(string.Join(", ", boilingTempsDelegate));
    Console.WriteLine();

    TemperatureCheck isWarmEnough = t => t > 20;
    TemperatureCheck isCoolEnough = t => t < 35;

    TemperatureCheck isTemperate = t => isWarmEnough(t) && isCoolEnough(t);

    var temperateTempsDelegate = TemperatureFilter(temperatures, isTemperate);
    Console.WriteLine("Temperate (delegate composition):");
    Console.WriteLine(string.Join(", ", temperateTempsDelegate));
    Console.WriteLine();

    #endregion

    // Func<T, TResult> -> return something
    // Action<T> -> return void
    // Predicate<T> -> return bool

    Func<int, bool> isFreezingFunc = t => t < 0;
    var freezingTempsFunc = TemperatureFilter(temperatures, isFreezingFunc);

    System.Console.WriteLine("Freezing (Func<int, bool>):");
    System.Console.WriteLine(string.Join(", ", freezingTempsFunc));
    System.Console.WriteLine();

    var freezingQuery = temperatures.Where(isFreezingFunc);
    var freezingResult = freezingQuery.ToList();

    Console.WriteLine("Freezing (stored Func passed to Where):");
    Console.WriteLine(string.Join(", ", freezingQuery));
    Console.WriteLine(freezingQuery[2]);
    Console.WriteLine(freezingResult[2]);

  }

  #region Delegate methods
  public delegate bool TemperatureCheck(int temp);

  public static bool FreezingCheck(int temperature)
  {
    return temperature < 0;
  }

  public static List<int> TemperatureFilter(List<int> temps, TemperatureCheck check)
  {
    List<int> result = new List<int>();
    foreach(var temp in temps)
    {
      if(check(temp))
      {
        result.Add(temp);
      }
    }
    return result;
  }

  public static List<int> TemperatureFilter(List<int> temps, Func<int, bool> check)
  {
    List<int> result = new List<int>();
    foreach(var temp in temps)
    {
      if(check(temp))
      {
        result.Add(temp);
      }
    }
    return result;
  }

  #endregion

  public static List<int> GetFreezingTemps(List<int> temps)
  {
    List<int> freezing = new List<int>();
    foreach(var temp in temps)
    {
      if(temp < 0)
      {
        freezing.Add(temp);
      }
    }
    return freezing;
  }

  public static List<int> GetBoilingTemps(List<int> temps)
  {
    List<int> boiling = new List<int>();
    foreach(var temp in temps)
    {
      if(temp > 100)
      {
        boiling.Add(temp);
      }
    }
    return boiling;
  }
}