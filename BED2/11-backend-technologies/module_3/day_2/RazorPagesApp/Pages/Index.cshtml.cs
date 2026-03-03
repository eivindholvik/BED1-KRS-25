using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RazorPagesApp.Pages;
[BindProperties]
public class IndexModel : PageModel
{
    
    public string Message {get; set;}

    public string Firstname {get; set;}
    public string Lastname {get; set;}
    public string Email {get; set;}
    public void OnGet()
    {
        Message = "Get handler method used";
    }
    // public void OnPost()
    // {
    //     var firstname = Request.Form["Firstname"];
    //     var lastname = Request.Form["Lastname"];
    //     var email = Request.Form["Email"];
    //     ViewData["confirmation"] = $"{firstname} {lastname}, email sent to: {email}";
    //     Message = "Post handler method used";
    // }

    // public void OnPost(string firstname, string lastname, string email)
    // {
    //     ViewData["confirmation"] = $"{firstname} {lastname}, email sent to: {email}";
    //     Message = "Post handler method used";
    // }

    public void OnPost()
    {
        ViewData["confirmation"] = $"{Firstname} {Lastname}, email sent to: {Email}";
        Message = "Post handler method used";
    }
}
