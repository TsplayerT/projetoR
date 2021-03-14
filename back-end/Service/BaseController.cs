using Api.Interface;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Domain;

namespace Api.Service
{
    [ApiController]
    [ControllerRouteFix]
    [Route("[controller]")]
    public abstract class BaseController<T> : ControllerBase, IController<T>
    {
        protected IRepository<T> Repository { get; }

        protected BaseController(IRepository<T> repository)
        {
            Repository = repository;
        }

        [HttpGet]
        public abstract Task<ActionResult<IEnumerable<T>>> Listar();

        [HttpGet("{id}")]
        public abstract Task<ActionResult<T>> Pegar(int id);

        [HttpPost]
        public abstract Task<ActionResult> Adicionar([FromBody] T objeto);

        [HttpPut]
        public abstract Task<ActionResult> Atualizar([FromForm] T objeto);

        [HttpDelete("{id}")]
        public abstract Task<ActionResult> Apagar(int id);
    }
}