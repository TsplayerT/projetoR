using Api.Interface;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Service;

namespace Api.Infrastructure
{
    [ApiController]
    public class Controller<T> : BaseController<T>
    {
        public Controller(IRepository<T> repository) : base(repository)
        {
        }

        public override async Task<ActionResult<IEnumerable<T>>> Listar()
        {
            var resultado = await Repository.ListarAsync().ConfigureAwait(false);

            return Ok(resultado);
        }

        public override async Task<ActionResult<T>> Pegar(int id)
        {
            var contato = await Repository.PegarAsync(id).ConfigureAwait(false);

            if (contato == null)
            {
                return NotFound();
            }

            return Ok(contato);
        }

        public override async Task<ActionResult> Adicionar([FromBody] T objeto)
        {
            if (objeto == null)
            {
                return NoContent();
            }

            var (resultado, mensagem) = await Repository.AdicionarAsync(objeto).ConfigureAwait(false);

            switch (resultado)
            {
                case true:
                    return Ok();
                case false:
                    return BadRequest();
                case null:
                    return StatusCode(500, mensagem);
            }
        }

        public override async Task<ActionResult> Atualizar([FromForm] T objeto)
        {
            if (objeto == null)
            {
                return NoContent();
            }

            var (resultado, mensagem) = await Repository.AtualizarAsync(objeto).ConfigureAwait(false);

            switch (resultado)
            {
                case true:
                    return Ok();
                case false:
                    return NotFound();
                case null:
                    return StatusCode(500, mensagem);
            }
        }

        public override async Task<ActionResult> Apagar(int id)
        {
            var (resultado, mensagem) = await Repository.ApagarAsync(id).ConfigureAwait(false);

            switch (resultado)
            {
                case true:
                    return Ok();
                case false:
                    return NotFound();
                case null:
                    return StatusCode(500, mensagem);
            }
        }
    }
}