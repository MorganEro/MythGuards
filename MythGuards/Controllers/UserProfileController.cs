using Microsoft.AspNetCore.Mvc;

namespace MythGuards.Controllers
{
    public class UserProfileController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
