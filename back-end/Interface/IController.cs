using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Interface
{
    public interface IController<T>
    {
        Task<ActionResult<IEnumerable<T>>> Listar();

        Task<ActionResult<T>> Pegar(int id);

        Task<ActionResult> Adicionar([FromBody] T objeto);

        Task<ActionResult> Atualizar([FromForm] T objeto);

        Task<ActionResult> Apagar(int id);
    }
}
