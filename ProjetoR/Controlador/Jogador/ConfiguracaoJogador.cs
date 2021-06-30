namespace ProjetoR.Controlador.Jogador
{
    public partial class ConfiguracaoJogador
    {
        public ConfiguracaoJogador()
        {
            InitializeComponent();

            Ordem = 4;
            Titulo = "Configuração";

            BindingContext = this;
        }
    }
}