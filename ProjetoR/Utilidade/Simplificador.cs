using System;
using System.Linq;
using System.Reflection;
using ProjetoR.Contrato.Abstrato;
using ProjetoR.Contrato.Interface;
using ProjetoR.Controlador.Base;
using Xamarin.Forms;

namespace ProjetoR.Utilidade
{
    public static class Simplificador
    {
        public static string ApenasLetra(this string texto) => string.Concat(texto.Where(char.IsLetter).ToList());

        public static Tuple<bool, T> Criar<T, TK>(this TK objeto, Action<string, string> acaoFalha = null)
        {
            try
            {
                var tipo = typeof(T);
                var funcaoTratamento = new Func<ParameterInfo, object>(x =>
                {
                    if (x.ParameterType == typeof(Explorador))
                    {
                        return App.Explorador;
                    }

                    var possuiInterface = objeto.GetType().GetInterfaces().Contains(x.ParameterType);

                    if (possuiInterface)
                    {
                        return objeto;
                    }

                    var parametro = Activator.CreateInstance(x.ParameterType);

                    return parametro;
                });
                var listaConstrutores = tipo.GetConstructors();
                var listaParametros = listaConstrutores.FirstOrDefault()?.GetParameters();
                var listaParametrosTratados = listaParametros?.Length != 0 ? listaParametros?.Select(funcaoTratamento).ToArray() : null;
                var pagina = Activator.CreateInstance(tipo, listaParametrosTratados);

                if (pagina is T paginaConvertida)
                {
                    return new Tuple<bool, T>(true, paginaConvertida);
                }
            }
            catch (Exception ex)
            {
                var titulo = $"{nameof(Simplificador)}_{nameof(Criar)}<{typeof(T).Name}>";

                acaoFalha?.Invoke(titulo, ex.Message);
            }

            return new Tuple<bool, T>(false, default);
        }

        private static bool Definir<T, TK>(this TK objeto, Action<T> acaoSucesso, Action<string, string> acaoFalha = null)
        {
            var (resultado, pagina) = objeto.Criar<T, TK>(acaoFalha);

            if (resultado)
            {
                acaoSucesso?.Invoke(pagina);
            }

            return resultado;
        }
        public static bool DefinirSessao<T>(this IElementController navegacao, Action<T> acaoSucesso, Action<string, string> acaoFalha = null)
        {
            return navegacao.Definir(acaoSucesso, acaoFalha);
        }
        public static bool DefinirPagina<T>(this IElementController sessao, Action<T> acaoSucesso, Action<string, string> acaoFalha = null) where T : Pagina
        {
            return sessao.Definir(acaoSucesso, acaoFalha);
        }
    }
}
