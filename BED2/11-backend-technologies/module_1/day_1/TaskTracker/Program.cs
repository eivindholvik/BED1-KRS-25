using TaskTracker;

namespace TaskTracker;

public class Program
{
  public static void Main()
  {
    var tasks = new List<TaskItem>();
    var nextId = 1;

    while(true)
    {
      Console.WriteLine("\n--- Task Trackers ---");
      Console.WriteLine("1) Add task");
      Console.WriteLine("2) List tasks");
      Console.WriteLine("3) Toggle done");
      Console.WriteLine("4) Remove task");
      Console.WriteLine("0) Exit");
      Console.Write("Choose: ");

      var choice = Console.ReadLine();

      switch (choice)
      {
        case "1": AddTask(tasks, ref nextId); break;
        case "2": ListTasks(tasks); break;
        case "3": ToggleDone(tasks); break;
        case "4": RemoveTask(tasks); break;
        case "0": return;
        default: Console.WriteLine("Unknown option."); break;
      }

    }
    }
  static void AddTask(List<TaskItem> tasks, ref int nextId)
  {
    Console.Write("Title: ");
    var title = Console.ReadLine() ?? "";

    if(title.Trim().Length == 0)
    {
      Console.WriteLine("Title cannot be empty.");
      return;
    }

    tasks.Add(new TaskItem{Id = nextId++, Title = title, Done = false});
    Console.WriteLine("Added.");
    }
    static void ListTasks(List<TaskItem> tasks)
  {
    if (tasks.Count == 0)
    {
      Console.WriteLine("No tasks yet.");
      return;
    }
    foreach (TaskItem t in tasks)
    {
      string status = t.Done ? "[X]" : "[ ]";
      Console.WriteLine($"{t.Id}. {status} {t.Title}");

    }
  }

  static void ToggleDone(List<TaskItem> tasks)
  {
    Console.Write("Task id: ");
    if (!int.TryParse(Console.ReadLine(), out var id))
    {
      Console.WriteLine("Invalid number.");
      return;
    }
    var task = tasks.FirstOrDefault(t => t.Id == id);
    if (task is null)
    {
      Console.WriteLine("Not found.");
      return;
    }
    task.Done = !task.Done;
    Console.WriteLine("Updated.");

  }

    static void RemoveTask(List<TaskItem> tasks)
  {
    Console.Write("Task id: ");
    if (!int.TryParse(Console.ReadLine(), out var id))
    {
      Console.WriteLine("Invalid number.");
      return;
    }
    var removed = tasks.RemoveAll(t => t.Id == id);
    Console.WriteLine(removed > 0 ? "Removed." : "Nopt found.");
  }
}