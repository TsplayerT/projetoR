using Api.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Domain;

namespace Api.Service
{
    public abstract class BaseRepository<T> : IRepository<T> where T : class, IModel
    {
        protected Context Context { get; set; }
        protected DbSet<T> Itens { get; set; }

        protected BaseRepository(Context context)
        {
            Context = context;
            Itens = Context.Set<T>();
        }

        public abstract Task<IEnumerable<T>> ListarAsync();

        public abstract Task<T> PegarAsync(int id);

        public abstract Task<Tuple<bool?, string>> AdicionarAsync(T estudante);

        public abstract Task<Tuple<bool?, string>> AtualizarAsync(T estudante);

        public abstract Task<Tuple<bool?, string>> ApagarAsync(int id);
    }
}
