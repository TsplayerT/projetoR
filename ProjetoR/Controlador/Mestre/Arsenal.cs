namespace ProjetoR.Controlador.Mestre
{
    public partial class Arsenal
    {
        public Arsenal()
        {
            InitializeComponent();

            Ordem = 2;
            Titulo = "Arsenal";
            TipoPaginaPai = typeof(Fichario);
            BindingContext = this;
        }
    }
}