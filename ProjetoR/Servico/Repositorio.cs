using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjetoR.Modelo.Simples;

namespace ProjetoR.Servico
{
    public class Repositorio
    {
        private static List<Objeto> ListaItens { get; }

        static Repositorio()
        {
            var listaNomesItems = new[]
            {
                "Primeiro objeto",
                "Segundo objeto",
                "Terceiro objeto",
                "Quarto objeto",
                "Quinto objeto",
                "Sexto objeto"
            };

            ListaItens = listaNomesItems.Select(x => new Objeto
            {
                Id = Guid.NewGuid().ToString(),
                Nome = x,
                Descricao = "Esta é uma descrição do objeto."
            }).ToList();
        }

        public static async Task<bool> AdicionarAsync(Objeto objeto)
        {
            ListaItens.Add(objeto);

            return await Task.FromResult(true);
        }

        public static async Task<bool> AtualizarAsync(Objeto objeto)
        {
            var objetoSalvo = ListaItens.Find(x => x.Id == objeto.Id);

            if (objetoSalvo != null)
            {
                ListaItens.Remove(objetoSalvo);
                ListaItens.Add(objetoSalvo);

                return await Task.FromResult(true);
            }

            return await Task.FromResult(false);
        }

        public static async Task<bool> ApagarAsync(string id)
        {
            var objetoSalvo = ListaItens.Find(x => x.Id == id);

            if (objetoSalvo != null)
            {
                ListaItens.Remove(objetoSalvo);

                return await Task.FromResult(true);
            }

            return await Task.FromResult(false);
        }

        public static async Task<Objeto> PegarAsync(string id)
        {
            var objetoSalvo = ListaItens.FirstOrDefault(s => s.Id == id);

            return await Task.FromResult(objetoSalvo);
        }

        public static async Task<List<Objeto>> ListarAsync(Func<Objeto, bool> filtro = null, bool forcarAtualizacao = false)
        {
            var listaFiltrada = filtro != null ? ListaItens.Where(filtro).ToList() : ListaItens;

            return await Task.FromResult(listaFiltrada);
        }
    }
}