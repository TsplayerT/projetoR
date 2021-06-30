using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using ProjetoR.Contrato.Abstrato;
using ProjetoR.Contrato.Interface;
using Xamarin.Forms.Internals;
using TipoCampanha = ProjetoR.Utilidade.Enumerador.TipoCampanha;

namespace ProjetoR.Utilidade
{
    public static class Miscelanea
    {
        private static string DiretorioControlador(params string[] pedacos)
        {
            var diretorio = "ProjetoR.Controlador";

            pedacos.ForEach(x => diretorio += $".{x}");

            return diretorio;
        }

        public static Tuple<bool, object> ExecutarMetodo(object classeOrigem, string nomeMetodo, List<object> parametros = null, List<Type> tiposGenericos = null, Action<string, string> acaoFalha = null)
        {
            var tipoClasse = classeOrigem is Type tipo ? tipo : classeOrigem?.GetType();

            try
            {
                if (tipoClasse != null && !string.IsNullOrEmpty(nomeMetodo))
                {
                    var listaMetodos = tipoClasse.GetMethods().Where(x => x.Name.ToLower() == nomeMetodo.ToLower()).ToList();

                    if (listaMetodos.Count == 1)
                    {
                        var metodo = tipoClasse.GetMethod(nomeMetodo);

                        if (tiposGenericos != null && tiposGenericos.All(x => x != null))
                        {
                            var metodoGenerico = metodo?.MakeGenericMethod(tiposGenericos.ToArray());
                            var resultadoMetodoGenerico = metodoGenerico?.Invoke(classeOrigem, parametros?.ToArray());

                            return new Tuple<bool, object>(true, resultadoMetodoGenerico);
                        }

                        var resultadoMetodo =  metodo?.Invoke(classeOrigem, parametros?.ToArray());

                        return new Tuple<bool, object>(true, resultadoMetodo);
                    }

                    if (tiposGenericos != null && tiposGenericos.Any() && tiposGenericos.All(x => x != null))
                    {
                        if (tipoClasse == typeof(Tuple) && listaMetodos.Count >= tiposGenericos.Count)
                        {
                            var metodoTuple = listaMetodos[tiposGenericos.Count - 1];
                            var metodoTupleGenerico = metodoTuple?.MakeGenericMethod(tiposGenericos.ToArray());
                            var resultadoMetodoTupleGenerico = metodoTupleGenerico?.Invoke(classeOrigem, parametros?.ToArray());

                            return new Tuple<bool, object>(true, resultadoMetodoTupleGenerico);
                        }

                        var metodo = listaMetodos.LastOrDefault();
                        var metodoGenerico = metodo?.MakeGenericMethod(tiposGenericos.ToArray());
                        var resultadoMetodoGenerico = metodoGenerico?.Invoke(classeOrigem, parametros?.ToArray());

                        return new Tuple<bool, object>(true, resultadoMetodoGenerico);
                    }
                }
            }
            catch (Exception ex)
            {
                var titulo = $"{nameof(Miscelanea)}_{nameof(ExecutarMetodo)}";

                acaoFalha?.Invoke(titulo, $"{nameof(tipoClasse)}: {tipoClasse}\n{nameof(nomeMetodo)}: {nomeMetodo}\n{nameof(parametros)}: {parametros}\n{nameof(tiposGenericos)}: {tiposGenericos}\n\n{ex.Message}");
            }

            return new Tuple<bool, object>(false, default);
        }

        public static Tuple<bool, TipoCampanha> PegarTipoCampanha(this Pagina pagina)
        {
            var diretorio = pagina?.GetType().Namespace;
            var pedacosDiretorio = diretorio?.Split('.').ToList() ?? new List<string>();
            var tipoCampanha = Enum.GetValues(typeof(TipoCampanha)).OfType<TipoCampanha>().FirstOrDefault(x => pedacosDiretorio.Contains(Convert.ToString(x)));

            return new Tuple<bool, TipoCampanha>(tipoCampanha != default, tipoCampanha);
        }

        private static List<Type> PegarTiposPaginas(string nomeNavegacao)
        {
            var diretorioMontado = DiretorioControlador(nomeNavegacao);
            var listaTipos = Assembly.GetExecutingAssembly().GetTypes().Where(x => !string.IsNullOrEmpty(x.Namespace) && x.Namespace.Contains(diretorioMontado)).ToList();

            return listaTipos;
        }
        public static List<Type> PegarTiposPaginas(this Navegacao navegacao)
        {
            var nomeNavegacao = navegacao.GetType().Name.ApenasLetra().Replace(nameof(Navegacao), string.Empty);

            return PegarTiposPaginas(nomeNavegacao);
        }
        public static List<Type> PegarTiposPaginas(this TipoCampanha tipoCampanha)
        {
            var nomeNavegacao = Enum.GetName(typeof(TipoCampanha), tipoCampanha);

            return PegarTiposPaginas(nomeNavegacao);
        }

    }
}
