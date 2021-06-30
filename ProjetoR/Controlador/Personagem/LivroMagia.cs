namespace ProjetoR.Controlador.Personagem
{
    public partial class LivroMagia
    {
        public LivroMagia()
        {
            InitializeComponent();

            Ordem = 2;
            Titulo = "Livro de Mágias";
            TipoPaginaPai = typeof(Inventario);
            BindingContext = this;
        }
    }
}