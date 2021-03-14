using Api.Domain;
using Api.Infrastructure;
using Api.Interface;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Api
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            var mvcBuilder = services.AddMvc();

            mvcBuilder.AddMvcOptions(x => x.Conventions.Add(new ControllerRouteFixAttribute()));
            mvcBuilder.ConfigureApplicationPartManager(x => x.FeatureProviders.Add(new ControllerFeatureProvider()));

            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddDbContext<Context>(x => x.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();
            app.UseStaticFiles();
            app.UseDefaultFiles();
            app.UseAuthorization();
            app.UseWelcomePage("/");
            app.UseStatusCodePages();
            app.UseHttpsRedirection();
            app.UseEndpoints(x => x.MapControllers());
        }
    }
}
