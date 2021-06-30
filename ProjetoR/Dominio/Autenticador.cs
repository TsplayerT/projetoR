using System.Threading.Tasks;
using ProjetoR.Contrato.Abstrato;
using ProjetoR.Contrato.Interface;

namespace ProjetoR.Dominio
{
    public class Autenticador : ModeloExibicao
    {
        public async Task<bool> ValidarUsuarioAsync(string identificador, string senha, VisualizadorMensagem visualizadorMensagem = null)
        {
            var resultado = await Task.FromResult(System.Diagnostics.Debugger.IsAttached || !string.IsNullOrEmpty(identificador) && !string.IsNullOrEmpty(senha)).ConfigureAwait(false);

            if (visualizadorMensagem != null && !resultado)
            {
                visualizadorMensagem.MostrarMensagem("Usuário inválido");
            }

            return resultado;
        }
    }
}
