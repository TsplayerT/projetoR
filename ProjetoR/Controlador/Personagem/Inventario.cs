namespace ProjetoR.Controlador.Personagem
{
    public partial class Inventario
    {
        public Inventario()
        {
            InitializeComponent();

            Ordem = 3;
            Titulo = "Mochila";
            BindingContext = this;
        }
    }
}