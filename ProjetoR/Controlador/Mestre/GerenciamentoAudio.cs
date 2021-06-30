namespace ProjetoR.Controlador.Mestre
{
    public partial class GerenciamentoAudio
    {
        public GerenciamentoAudio()
        {
            InitializeComponent();

            Ordem = 1;
            Titulo = "Gerenciamento Áudio";
            TipoPaginaPai = typeof(ConfiguracaoCampanha);
            BindingContext = this;
        }
    }
}