using System.Windows.Input;
using ProjetoR.Contrato.Interface;
using Xamarin.Forms;

namespace ProjetoR.Controlador.Principal
{
    public partial class Mais
    {
        public ICommand ComandoBotaoConfiguracaoApp { get; }
        public ICommand ComandoBotaoNotaAtualizacao { get; }

        public Navegacao Navegacao { get; }

        public Mais(Navegacao navegacao)
        {
            InitializeComponent();

            Navegacao = navegacao;

            ComandoBotaoConfiguracaoApp = new Command(ExecutarBotaoConfiguracaoApp);
            ComandoBotaoNotaAtualizacao = new Command(ExecutarBotaoNotaAtualizacao);

            BindingContext = this;
        }

        private void ExecutarBotaoConfiguracaoApp(object obj)
        {
            Navegacao.MudarPagina<ConfiguracaoApp>();
        }
        private void ExecutarBotaoNotaAtualizacao(object obj)
        {
            Navegacao.MudarPagina<NotaAtualizacao>();
        }
    }
}