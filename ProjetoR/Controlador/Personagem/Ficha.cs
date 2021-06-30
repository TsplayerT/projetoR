namespace ProjetoR.Controlador.Personagem
{
    public partial class Ficha
    {
        public Ficha()
        {
            InitializeComponent();

            Ordem = 2;
            Titulo = "Ficha";
            BindingContext = this;
        }
    }
}