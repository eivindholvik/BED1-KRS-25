using System;
using System.IO;

namespace MyFileTest;
public class Program
{
  public static void Main(string[] args)
  {
    FileIO.Run();
  }
}

public class FileIO
{
  public static void Run()
  {
    string filePath = @"c:\temp\TestFile4.txt";
    string filePath2 = "c:\\temp\\TestFile.txt";
    string dir = @"c:\temp\";
    string writeText = "This is written with the instance of the class.";

    FileIO myFileIO = new FileIO();

    myFileIO.WriteToFile2(filePath, writeText);


    // WriteToFile(filePath, writeText);
    ReadFile(filePath);


    // if (!File.Exists(filePath))
    // {
    //   File.CreateText(filePath);
    // }

    // string text1 = "C# File operations are so useful.";
    // File.WriteAllText(filePath, text1);


    PrintInfo(filePath);
    GetFiles(dir);
    GetDirs(dir);
    GetDrives();
  }
  

    // string readText = File.ReadAllText(filePath);
    // System.Console.WriteLine("This text has been read from the file:");
    // System.Console.WriteLine(readText);

  public static void WriteToFile(string filePath, string writeText)
  {
      using (StreamWriter strw = File.CreateText(filePath))
      {
          strw.WriteLine(writeText);
          strw.Close();
      }
  }

    public void WriteToFile2(string filePath, string writeText)
  {
      using (StreamWriter strw = File.CreateText(filePath))
      {
          strw.WriteLine(writeText);
          strw.Close();
      }
  }

  public static void GetFiles(string dir)
  {
    //Check if the directory exists
    if (Directory.Exists(dir))
    {
        //Get files in directory
        string[] files= Directory.GetFiles(dir);
        foreach (string f in files)
        {
            //Print each file’s name
            Console.WriteLine("FileName: " + f);
        }
    }
  }

  public static void GetDirs(string dir)
  {

    //Check if the parent directory exists
    if (Directory.Exists(dir))
    {
        string[] subfolders = Directory.GetDirectories(dir);
        foreach (string sf in subfolders)
        {
            //Print each subfolder’s name
            Console.WriteLine("Sub Folder Name: " + sf);
        }
    }
  }

  public static void ReadFile(string filePath)
  {
        using (StreamReader strr = File.OpenText(filePath))
{
    string s = strr.ReadToEnd();
    Console.WriteLine(s);
    strr.Close();
}

  }

  public static void PrintInfo(string filePath)
  {
        //Check if the named file exists
        if (File.Exists(filePath))
        {
            //Get file information
            FileInfo info = new FileInfo(filePath);
            Console.WriteLine("File Name: " + info.FullName);
            Console.WriteLine("File Last accessed: " + info.LastAccessTime);
            Console.WriteLine("File Length: " + info.Length);
  }
}
public static void GetDrives()
  {
    string[] drives = Directory.GetLogicalDrives();
    foreach (string drive in drives)
    {
        Console.WriteLine("Drives: " + drive);
    }
  }
}