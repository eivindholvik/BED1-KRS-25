using CounterApp.Models;

namespace CounterApp.Services;

public class StudentService
{
  private readonly List<Student> _students = new();
  private int _nextId = 1;

  public IReadOnlyList<Student> GetAll() => _students;

  public Student? GetById(int id) => _students.FirstOrDefault(student => student.Id == id);

  public Student Add(string name, int score)
  {
    var s = new Student {Id = _nextId++, Name = name, Score = score};
    _students.Add(s);
    return s;
  }
}