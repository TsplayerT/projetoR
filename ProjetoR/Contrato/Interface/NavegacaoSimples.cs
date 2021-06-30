using ProjetoR.Contrato.Abstrato;
using Xamarin.Forms;

namespace ProjetoR.Contrato.Interface
{
    public interface NavegacaoSimples : Navegacao, VisualizadorMensagem, AlteradorConteudo<Pagina, ShellContent>
    {
    }
}
