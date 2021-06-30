using System;
using ProjetoR.Contrato.Abstrato;

namespace ProjetoR.Servico
{
    public class Vinculador
    {
        public static bool Associar<T, TK>() where T : Pagina where TK : ModeloExibicao
        {
            try
            {
                var pagina = Activator.CreateInstance<T>();
                var modeloExibicao = Activator.CreateInstance<TK>();

                pagina.Title = modeloExibicao.Titulo;
                pagina.BindingContext = modeloExibicao;

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                throw;
            }

            return true;
        }
    }
}
