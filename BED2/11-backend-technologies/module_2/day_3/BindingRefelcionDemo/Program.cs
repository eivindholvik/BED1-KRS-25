using System;
using System.ComponentModel;
using System.Data;
using System.Reflection;

// Add a public static string Company = "Something"; to Employee class
// Update DumpFieldsAndProperties to include BindingFlag.Static and see it appear.
//Add another method in Employee class with the "Tag name" of Command.
// Small extra step. Modify the RunCommands method to include an additional Parameter string "FuncType", and try using it with "Accessor"



# region 1) Custom Attribute

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method | AttributeTargets.Property, Inherited = true, AllowMultiple = true)]
public sealed class MyCustomAttribute : Attribute
{
  public string Name { get; }
  public string Action { get; }

  public MyCustomAttribute(string name, string action)
  => (Name, Action) = (name, action);
}


#endregion

# region 2) A normal class using field + properties

[MyCustom("Model", "Represents an employee")]
public class Employee
{
  private int age;
  private readonly string fullname;
  [MyCustom("Accessor", "Exposes employee id")]
  public int Id {get;}
  [MyCustom("Accessor", "Exposes employee full name")]
  public string FullName
  {
    get { return fullname;}
  }

  public Employee(int id, string fullname)
  => (Id, this.fullname) = (id, fullname);

  [MyCustom("Modifier", "Assigns the employee age")]
  public void SetAge(int age) => this.age = age;

  [MyCustom("Accessor", "Retrns employee age")]
  public int GetAge() => age;
  
  [MyCustom("Command", "Prints a summary to console")]
  public void PrintSummary()
  {
    System.Console.WriteLine($"Employee #{Id}: {FullName}, age {age}");
  }


}

#endregion

public static class Program
{
  public static void Main(string[] args) {
    Employee emp = new Employee(6, "John Smith");
    emp.SetAge(30);

    System.Console.WriteLine("Early binding (normal calls)");
    System.Console.WriteLine(emp.FullName);
    System.Console.WriteLine(emp.GetAge());
    emp.PrintSummary();

    System.Console.WriteLine("Refelction: list memebers with BindingFlags");
    DumpFieldsAndProperties(typeof(Employee));

    System.Console.WriteLine("Reflection: read attributes (metadata)");
    DumpMyCustomAttributes(typeof(Employee));

    System.Console.WriteLine("Late binding: invoke methods tagged as Command");
    RunCommands(emp);
  }

  private static void DumpFieldsAndProperties(Type t)
  {
    // Public instance properties
    var props = t.GetProperties(BindingFlags.Public | BindingFlags.Instance);
    System.Console.WriteLine("Public instance props:");
    foreach(var p in props)
    {
      System.Console.WriteLine($"{p.PropertyType.Name} {p.Name}");
    }

    var pubFields = t.GetFields(BindingFlags.Public | BindingFlags.Instance);
    System.Console.WriteLine("Public instance fields:");
    foreach(var f in pubFields)
    {
      System.Console.WriteLine($"{f.FieldType} {f.Name}");
    }

    var privFields = t.GetFields(BindingFlags.NonPublic | BindingFlags.Instance);
    System.Console.WriteLine("Non-public instance fields:");
    foreach(var f in privFields)
    {
      System.Console.WriteLine($"{f.FieldType.Name} {f.Name}");
    }
  }

  private static void DumpMyCustomAttributes(Type t)
  {
    var typeAttrs = t.GetCustomAttributes<MyCustomAttribute>(inherit: true);
    System.Console.WriteLine($"Attributes on type {t.Name}:");
    foreach(var a in typeAttrs)
    {
      System.Console.WriteLine($"[{a.Name}] {a.Action}");
    }

    System.Console.WriteLine("Attributes on public instance methods:");
    foreach(var m in t.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly))
    {
      var attrs = m.GetCustomAttributes<MyCustomAttribute>(inherit: true).ToArray();
      if(attrs.Length == 0) continue;
      System.Console.WriteLine($"{m.Name}()");
      foreach(var a in attrs)
      {
        System.Console.WriteLine($"[{a.Name}] {a.Action}");
      }
    }

    System.Console.WriteLine("Attributes on public instance properties:");
    foreach(var p in t.GetProperties(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly))
    {
      var attrs = p.GetCustomAttributes<MyCustomAttribute>(inherit: true).ToArray();
      if(attrs.Length == 0) continue;

      System.Console.WriteLine($"{p.Name}");
      foreach(var a in attrs)
      {
        System.Console.WriteLine($"[{a.Name}] {a.Action}");
      }
    }

  }

  private static void RunCommands(object obj)
  {
    var t = obj.GetType();

    var testing = t.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly);

    if(testing.Length == 0) return;

    var commandMethods = t.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly).Where(m =>
    {
      var attrs = m.GetCustomAttributes<MyCustomAttribute>(inherit:true);
      return m.GetParameters().Length == 0 && attrs.Any(a => a.Name == "Command");
    });

    foreach(var m in commandMethods)
    {
      System.Console.WriteLine($"Invoking: {m.Name} (found via metadata)");
      m.Invoke(obj, null);
    }
  }

  
}