namespace ProjetoR.Controlador.Jogador
{
    public partial class ListaConteudo
    {
        public ListaConteudo()
        {
            InitializeComponent();
            
            Ordem = 1;
            Titulo = "Home";

            BindingContext = this;
        }
    }
}