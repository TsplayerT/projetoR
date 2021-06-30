using System;

namespace ProjetoR.Contrato.Interface
{
    public interface AlteradorConteudo<in T, TK>
    {
        Tuple<bool, TK> AdicionarConteudo(T conteudo);
    }
}
