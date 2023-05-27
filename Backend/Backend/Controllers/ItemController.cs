using Microsoft.AspNetCore.Mvc;
using Backend.Models;
using Backend;

namespace GegoApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class itemController : ControllerBase
    {
        private readonly DataContext _context;

        public class Items
        {
            public int id;
            public string? title;
        }

        public itemController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetItems(int amount, int start = 0)
        {

            //http://localhost:5259/item?amount=4
            //http://localhost:5259/item?amount=4&start=40
            List<ItemEntity> items = _context.items.ToList().GetRange(start, amount);
            return StatusCode(StatusCodes.Status200OK, items);
        }
    }
}
