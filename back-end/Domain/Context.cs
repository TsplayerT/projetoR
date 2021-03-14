using Microsoft.EntityFrameworkCore;

namespace Api.Domain
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            Utility.ModelsTypeList.ForEach(x => builder.Entity(x).HasKey("Id"));
         
            base.OnModelCreating(builder);
        }
    }
}
