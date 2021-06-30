using ProjetoR.Contrato.Abstrato;

namespace ProjetoR.Contrato.Interface
{
    public interface Navegacao
    {
        void MudarPagina<TK>() where TK : Pagina;
        void MudarPagina<TK>(TK pagina) where TK : Pagina;
    }
}
