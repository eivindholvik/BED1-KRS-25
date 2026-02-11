using System.IO;
class Program
{
  public static void Main(string[] args)
  {
    string myStr = "Hello World";
    string myStr2 = "my dear friend";
    string myStrCopy = (string)myStr.Clone();
    Console.WriteLine(myStr);
    Console.WriteLine(myStrCopy);
    string myConcatStr = string.Concat(myStr, ", " , myStr2);
    System.Console.WriteLine(myConcatStr);

    bool result = myStr.Contains("o ");
    System.Console.WriteLine(result);
    System.Console.WriteLine("this is some 26 chars long".Length);

    string hello = "Hello World";
    System.Console.WriteLine(hello.Equals("Hello"));

    System.Console.WriteLine(hello.Replace(" ", "-- --! --"));

    System.Console.WriteLine(hello.ToUpper());
    System.Console.WriteLine(hello.ToLower());

    string trimMe = "         Hello World!  ";
    System.Console.WriteLine(trimMe.Trim());

    System.Console.WriteLine(trimMe.Trim().StartsWith(" "));


    string mySentence = "I enjoy learning C#";
    string[] splitArray = mySentence.Split(" ");

    foreach (string word in splitArray)
    {
      System.Console.WriteLine(string.Concat("Subsring: ", word));
    }

    int[] myArray =[10, 20, 30, 40, 50];
    foreach (int item in myArray)
    {
            Console.WriteLine(item);
    }

    
  }

}