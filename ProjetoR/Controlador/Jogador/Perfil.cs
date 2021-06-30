namespace ProjetoR.Controlador.Jogador
{
    public partial class Perfil
    {
        public Perfil()
        {
            InitializeComponent();
            
            Ordem = 3;
            Titulo = "Perfil";

            BindingContext = this;
        }
    }
}