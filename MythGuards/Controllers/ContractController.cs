using Microsoft.AspNetCore.Mvc;

namespace MythGuards.Controllers
{
    public class ContractController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
