using ProjetoR.Contrato.Interface;
using ProjetoR.Controlador.Principal;
using ProjetoR.Infraestrutura;

namespace ProjetoR.Controlador.Base
{
    public partial class App
    {
        public static Explorador Explorador { get; private set; }

        public App()
        {
            InitializeComponent();

            Explorador = new Gerenciador();

            //DependencyService.Register<Repositorio>();

            MainPage = Explorador.Iniciar<NavegacaoPrincipal<MenuOpcoes>>();
            BindingContext = this;
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}
