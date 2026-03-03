namespace Datastruct;

public class Program
{

  enum Hand
{
    Rock,
    Paper,
    Scissors
}
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday};
  public static void Main(string[] args)
  {
    FirstArr();
    SecArr();
    MultiArr();
    Multi3Arr();
    RunArray();
    Run();
    Dictionaries();
    UseQueue();
    UseLinked();
    UseEnum();
  }

  public static void UseEnum()
  {
    Day thisDay = Day.Friday;
    Console.WriteLine(thisDay);

    Hand myHand = Hand.Rock;
    int handInt = (int)myHand;
    System.Console.WriteLine($"You chose: {myHand}\nWhich has the corresponding integer {handInt}");

    // switch(myHand)
    // {
    //   case Hand.Rock:
    //     System.Console.WriteLine("You chose: Rock");
    //     break;
    //   case Hand.Scissors:
    //     System.Console.WriteLine("You chose: Scissors");
    //     break;
    //   case Hand.Paper:
    //     int handInt = (int)myHand;
    //     System.Console.WriteLine($"You chose: {myHand}\nWhich has the corresponding integer {handInt}");
    //     break;
    // }
    
  }

  public static void UseLinked()
  {
        //Declare a new linked list to store student IDs
    string[] students = {"Jimmy", "Cathy", "Mark"};
    LinkedList<string> studentlist = new LinkedList<string>(students);

    //Add elements
    studentlist.AddFirst("Robin");
    studentlist.AddLast("Thomas");

    var currentNode = studentlist.Find("Jimmy");
    if(currentNode != null)
    {
      System.Console.WriteLine($"The current node is {currentNode}");
        studentlist.AddBefore(currentNode, "Kyle");
        studentlist.AddAfter(currentNode, "Kenny");
    }

    //Remove element
    studentlist.Remove("John");

    //Print final linked list
    Console.WriteLine("Final Students Linked List:");
    Console.WriteLine(string.Join(',', studentlist));
  }

  public static void UseQueue()
  {
    //Declare a new queue to store student IDs
    Queue<int> studentIDs = new Queue<int>();
    studentIDs.Enqueue(101);
    studentIDs.Enqueue(403);
    studentIDs.Enqueue(237);
    studentIDs.Enqueue(872);

    //Remove element
    int dequeued = studentIDs.Dequeue();
    System.Console.WriteLine(dequeued);

    //Print final queue values
    Console.WriteLine(string.Join(',', studentIDs));
  }

  public static void Run()
  {
    List<int> numbersList = new List<int>() {2,4,6};
    
    numbersList.Add(8);
    numbersList.Remove(4);
    numbersList.Reverse();
    List<int> numbersGreaterThanThree = numbersList.FindAll(ele => ele > 3);
    

    // PrintList(numbersGreaterThanThree);
    string greaterThanThree = string.Join(' ', numbersGreaterThanThree);
    Console.WriteLine(greaterThanThree);
    
  }

  public static void Dictionaries()
  {
    Dictionary<int, string> dayNames = new Dictionary<int, string>()
    {
      {1, "Monday"},
      {2, "Tuesday"},
      {3, "Wednesday"}
    };
    dayNames.Add(4, "Thursday");

    bool containsFriday = dayNames.ContainsValue("Friday");
    System.Console.WriteLine(containsFriday.ToString());

    dayNames.Remove(2);
    List<int> keyList = new List<int>(dayNames.Keys);
    PrintList(keyList);

    foreach(string day in dayNames.Values)
    {
      System.Console.WriteLine(day);
    }
    System.Console.WriteLine(dayNames.ElementAt(1));
  }

    public static void PrintList(List<int> printList)
  {
    for(int i = 0; i < printList.Count; i++)
    {
      System.Console.WriteLine($"{i}: {printList[i]}");
    }
  }

  public static void RunArray()
  {
    int[] intArray = { 2, 4, 6, 8, 10 };

    Array.Clear(intArray, 1, intArray.Length -2);
    PrintArrayValues(intArray);
   int[] clonedArray = (int[])intArray.Clone();
    PrintArrayValues(clonedArray);

    System.Console.WriteLine(intArray.Contains(2).ToString());

    int foundIndex = Array.IndexOf(intArray, 1);
    System.Console.WriteLine(foundIndex);
    Array.Reverse(intArray);
    PrintArrayValues(intArray);

    Array.Sort(intArray);
    PrintArrayValues(intArray);

    string[] myArray = { "Hi", "I", "Love", "C#", "Coding" };
    Array.Sort(myArray);
    PrintArrayValues(myArray);
 
  }


  public static void FirstArr()
  {
    int[] singleDimArray = new int[3] {10, 20, 30};
    // myArr[3] = 3;
    PrintArrayValues(singleDimArray);
  }
  public static void SecArr()
  {
    // string[] newArr;
    string[] newArr = new string[2];
    newArr[0] = "My first value";
    newArr[1] = "My last value";

    PrintArrayValues(newArr);
  }

  private static void MultiArr()
  {
    int[,] multiDimArray = {
    { 10, 20, 30 },
    { 11, 21, 31 },
    { 12, 22, 32 } };
    PrintArrayValues(multiDimArray);
  }

  public static void Multi3Arr()
  {
    int[,,] threeDimArray = {
      { 
        { 10, 20, 30 },
        { 11, 21, 31 },
        { 12, 22, 32 }
      },
      {
        { 20, 40, 60 },
        { 21, 41, 61 },
        { 22, 42, 62 }
      }
      };
      PrintArrayValues(threeDimArray);
  }


  public static void PrintArrayValues<T>(T[] printArray)
  {
    for(int i = 0; i < printArray.Length; i++)
    {
      System.Console.WriteLine($"{i}: {printArray[i]}");
      if(i == printArray.Length - 1)
      {
        System.Console.WriteLine("");
        break;
      }
    }
  }

  public static void PrintArrayValues<T>(T[,,] printArray)
  {
    for(int x = 0; x < printArray.GetLength(0); x++)
    {
      for(int y = 0; y < printArray.GetLength(1); y++)
      {
        for(int z = 0; z < printArray.GetLength(2); z++)
        {
        System.Console.WriteLine($"Index [{x},{y},{z}]: {printArray[x,y,z]}");
          
        }
      }
    }
  }

  public static void PrintArrayValues<T>(T[,] printArray)
  {
    for(int x = 0; x < printArray.GetLength(0); x++)
    {
      for(int y = 0; y < printArray.GetLength(1); y++)
      {
        System.Console.WriteLine($"Index [{x},{y}]: {printArray[x,y]}");
      }
    }
  }


}