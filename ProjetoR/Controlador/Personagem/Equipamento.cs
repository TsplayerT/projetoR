namespace ProjetoR.Controlador.Personagem
{
    public partial class Equipamento
    {
        public Equipamento()
        {
            InitializeComponent();

            Ordem = 1;
            Titulo = "Equipamentos";
            TipoPaginaPai = typeof(Inventario);
            BindingContext = this;
        }
    }
}