using Api.Domain;
using Api.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Service;

namespace Api.Infrastructure
{
    public class Repository<T> : BaseRepository<T> where T : class, IModel
    {
        public Repository(Context context) : base(context)
        {
        }

        public override async Task<IEnumerable<T>> ListarAsync()
        {
            return await Itens.ToListAsync().ConfigureAwait(false);
        }

        public override async Task<T> PegarAsync(int id)
        {
            return await Itens.FindAsync(id).ConfigureAwait(false);
        }

        public override async Task<Tuple<bool?, string>> AdicionarAsync(T objeto)
        {
            objeto.CreationDate = DateTime.Now;

            var resultado = await Context.AddAsync(objeto).ConfigureAwait(false);

            try
            {
                await Context.SaveChangesAsync().ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                return new Tuple<bool?, string>(null, ex.Message);
            }

            return new Tuple<bool?, string>(resultado.State == EntityState.Added, string.Empty);
        }

        public override async Task<Tuple<bool?, string>> AtualizarAsync(T objeto)
        {
            objeto.ChangeDate = DateTime.Now;

            var resultado = Context.Update(objeto);

            try
            {
                await Context.SaveChangesAsync().ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                return new Tuple<bool?, string>(null, ex.Message);
            }

            return new Tuple<bool?, string>(resultado.State == EntityState.Modified, string.Empty);
        }

        public override async Task<Tuple<bool?, string>> ApagarAsync(int id)
        {
            var resultado = Context.Remove(id);

            try
            {
                await Context.SaveChangesAsync().ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                return new Tuple<bool?, string>(null, ex.Message);
            }

            return new Tuple<bool?, string>(resultado.State == EntityState.Deleted, string.Empty);
        }
    }
}