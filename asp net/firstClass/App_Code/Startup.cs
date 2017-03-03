using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(firstClass.Startup))]
namespace firstClass
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
