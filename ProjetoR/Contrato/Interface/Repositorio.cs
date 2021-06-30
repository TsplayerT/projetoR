using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProjetoR.Contrato.Interface
{
    public interface Repositorio<T>
    {
        Task<bool> AdicionarAsync(T objeto);
        Task<bool> AtualizarAsync(T objeto);
        Task<bool> ApagarAsync(string id);
        Task<T> PegarAsync(string id);
        Task<List<T>> ListarAsync(Func<T, bool> filtro = null, bool forcarAtualizacao = false);
    }
}
