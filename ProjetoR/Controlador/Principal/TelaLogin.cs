using System.Windows.Input;
using ProjetoR.Contrato.Interface;
using ProjetoR.Controlador.Jogador;
using ProjetoR.Dominio;
using ProjetoR.Infraestrutura;
using Xamarin.Forms;

namespace ProjetoR.Controlador.Principal
{
    public partial class TelaLogin
    {
        public ICommand ComandoBotaoConectar { get; }

        private Explorador Explorador { get; }
        private VisualizadorMensagem VisualizadorMensagem { get; }
        private Autenticador Autenticador { get; }

        public TelaLogin(VisualizadorMensagem visualizadorMensagem, Explorador explorador, Autenticador autenticador)
        {
            InitializeComponent();

            Explorador = explorador;
            VisualizadorMensagem = visualizadorMensagem;
            Autenticador = autenticador;

            ComandoBotaoConectar = new Command(ExecutarBotaoConectar);

            BindingContext = this;
        }

        private async void ExecutarBotaoConectar()
        {
            var resultado = await Autenticador.ValidarUsuarioAsync(EntradaIdentificador.Text, EntradaSenha.Text, VisualizadorMensagem).ConfigureAwait(false);

            if (resultado)
            {
                // Prefixing with `//` switches to a different navigation stack instead of pushing to the active one
                //await Shell.Current.GoToAsync($"//{nameof(Sobre)}");

                Explorador.MudarNavegacao<NavegacaoJogador<ListaConteudo>>();
            }
        }
    }
}