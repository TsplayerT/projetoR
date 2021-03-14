using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Interface
{
    public interface IRepository<T>
    {
        Task<IEnumerable<T>> ListarAsync();

        Task<T> PegarAsync(int id);

        Task<Tuple<bool?, string>> AdicionarAsync(T objeto);

        Task<Tuple<bool?, string>> AtualizarAsync(T objeto);

        Task<Tuple<bool?, string>> ApagarAsync(int id);
    }
}
