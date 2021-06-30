namespace ProjetoR.Controlador.Mestre
{
    public partial class Fichario
    {
        public Fichario()
        {
            InitializeComponent();

            Ordem = 2;
            Titulo = "Fichário";
            TipoPaginaPai = typeof(Arsenal);
            BindingContext = this;
        }
    }
}