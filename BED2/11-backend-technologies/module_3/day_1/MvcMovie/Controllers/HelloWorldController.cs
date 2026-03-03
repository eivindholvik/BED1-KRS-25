using Microsoft.AspNetCore.Mvc;

namespace MvcMovie.Controllers;

public class HelloWorldController : Controller
{
  public IActionResult Index()
  {
    return View();
  }

  public IActionResult Welcome(string name, int Id = 1, int nums = 1)
  {
    ViewData["Message"] = "Welcome " + name;
    ViewData["Id"] = "ID equals " + Id;
    ViewData["nums"] = nums;
    ViewData["Title"] = "Welcome";
    return View();
  }

  public IActionResult Task(string day)
  {
    ViewData["DayMessage"] = "The day is " + day;
    return View();
  }
}