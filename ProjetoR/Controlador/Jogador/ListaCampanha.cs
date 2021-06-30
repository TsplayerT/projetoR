using System.Windows.Input;
using ProjetoR.Contrato.Interface;
using ProjetoR.Controlador.Mestre;
using ProjetoR.Controlador.Personagem;
using ProjetoR.Infraestrutura;
using Xamarin.Forms;

namespace ProjetoR.Controlador.Jogador
{
    public partial class ListaCampanha
    {
        public ICommand ComandoBotaoCampanhaMestre { get; }
        public ICommand ComandoBotaoCampanhaPersonagem { get; }

        public Explorador Explorador { get; }

        public ListaCampanha(Explorador explorador)
        {
            InitializeComponent();

            Explorador = explorador;

            Ordem = 2;
            Titulo = "Lista de Campanhas";

            ComandoBotaoCampanhaMestre = new Command(ExecutarBotaoCampanhaMestre);
            ComandoBotaoCampanhaPersonagem = new Command(ExecutarBotaoCampanhaPersonagem);

            BindingContext = this;
        }

        private void ExecutarBotaoCampanhaMestre(object obj)
        {
            Explorador.MudarNavegacao<NavegacaoCampanha<Teatro>>();
        }

        private void ExecutarBotaoCampanhaPersonagem(object obj)
        {
            Explorador.MudarNavegacao<NavegacaoCampanha<Cena>>();
        }
    }
}