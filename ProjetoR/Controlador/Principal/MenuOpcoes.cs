using System.Windows.Input;
using ProjetoR.Contrato.Interface;
using Xamarin.Forms;

namespace ProjetoR.Controlador.Principal
{
    public partial class MenuOpcoes
    {
        public ImageSource EnderecoLogo { get; }
        public ICommand ComandoBotaoConectar { get; }
        public ICommand ComandoBotaoMais { get; }

        private Navegacao Navegacao { get; }

        public MenuOpcoes(Navegacao navegacao)
        {
            InitializeComponent();

            Navegacao = navegacao;

            EnderecoLogo = ImageSource.FromResource("ProjetoR.Recurso.logo.png");
            ComandoBotaoConectar = new Command(ExecutarBotaoConectar);
            ComandoBotaoMais = new Command(ExecutarBotaoMais);

            BindingContext = this;
        }

        private void ExecutarBotaoConectar(object obj)
        {
            Navegacao.MudarPagina<TelaLogin>();
        }
        private void ExecutarBotaoMais(object obj)
        {
            Navegacao.MudarPagina<Mais>();
        }
    }
}