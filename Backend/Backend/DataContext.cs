using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<ItemEntity> items { get; set; }
    }

}
