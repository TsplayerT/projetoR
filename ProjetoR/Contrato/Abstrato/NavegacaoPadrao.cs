using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using ProjetoR.Contrato.Interface;
using ProjetoR.Controlador.Base;
using ProjetoR.Utilidade;
using Xamarin.Forms;
using Xamarin.Forms.Internals;
using TipoCampanha = ProjetoR.Utilidade.Enumerador.TipoCampanha;

namespace ProjetoR.Contrato.Abstrato
{
    public abstract class NavegacaoPadrao : Shell, VisualizadorMensagem, CriadorConteudo<ShellContent>
    {
        public Func<IList<ShellItem>, Type, ShellItem> FuncaoProcurarConteudo => (x, p) => x?.Where(c => c != null).FirstOrDefault(z => z.CurrentItem?.CurrentItem.Content?.GetType() == p);

        private Explorador Explorador { get; }

        protected NavegacaoPadrao()
        {
            Explorador = App.Explorador;

            //Shell.SetFlyoutBehavior(this, FlyoutBehavior.Disabled);
            //Shell.SetNavBarIsVisible(pagina, false);
            //Shell.SetTabBarIsVisible(pagina, false);
            //Shell.SetFlyoutItemIsVisible(pagina, false);
            //NavigationPage.SetHasNavigationBar(pagina, false);
            //NavigationPage.SetHasBackButton(pagina, false);
        }

        public List<ShellContent> CriarListaConteudo<T>(T navegacao, TipoCampanha tipoCampanha = default) where T : Shell, Navegacao
        {
            var listaPagina = new List<Pagina>();
            var listaConteudo = new List<ShellContent>();
            var listaParametros = new List<object>
            {
                navegacao,
                default(Action<string, string>)
            };
            var listaTiposPaginas = tipoCampanha != default ? tipoCampanha.PegarTiposPaginas() : navegacao.PegarTiposPaginas();

            listaTiposPaginas.ForEach(x =>
            {
                var listaParametrosGenericos = new List<Type>
                {
                    x,
                    typeof(Shell)
                };
                var (resultado, valor) = Miscelanea.ExecutarMetodo(typeof(Simplificador), nameof(Simplificador.Criar), listaParametros, listaParametrosGenericos);

                if (resultado && valor is ITuple tuple && tuple.Length == 2 && tuple[0] is bool paginaCriada && paginaCriada && tuple[1] is Pagina pagina)
                {
                    listaPagina.Add(pagina);
                }
            });

            listaPagina.OrderBy(x => x.TipoPaginaPai).ThenBy(x => x.Ordem).ForEach(x =>
            {
                var (resultado, conteudo) = navegacao.Criar<ShellContent, Navegacao>();

                if (resultado)
                {
                    conteudo.Title = x.Titulo;
                    conteudo.Content = x;

                    listaConteudo.Add(conteudo);
                }
            });

            return listaConteudo;
        }

        public Tuple<bool, ShellContent> CriarConteudoPagina<T, TK>(T navegacao) where T : Shell, Navegacao where TK : Pagina
        {
            if (navegacao != null)
            {
                var conteudo = navegacao.Items?.Where(x => x != null).FirstOrDefault(x => x.CurrentItem?.CurrentItem.Content?.GetType() == typeof(TK));

                if (conteudo != null)
                {
                    return new Tuple<bool, ShellContent>(true, conteudo.CurrentItem?.CurrentItem);
                }

                var (resultado, pagina) = navegacao.Criar<TK, T>();

                if (resultado)
                {
                    var conteudoCriado = new ShellContent
                    {
                        Title = pagina.Titulo,
                        Content = pagina
                    };

                    return new Tuple<bool, ShellContent>(true, conteudoCriado);
                }
            }

            return new Tuple<bool, ShellContent>(false, default);
        }

        public Tuple<bool, ShellContent> CriarConteudoPagina<T, TK>(T navegacao, TK pagina) where T : Shell, Navegacao where TK : Pagina
        {
            if (navegacao != null)
            {
                var conteudo = navegacao.Items?.Where(x => x != null).FirstOrDefault(x => x.CurrentItem?.CurrentItem.Content?.GetType() == typeof(TK));

                if (conteudo != null)
                {
                    return new Tuple<bool, ShellContent>(true, conteudo.CurrentItem?.CurrentItem);
                }

                var conteudoCriado = new ShellContent
                {
                    Title = pagina.Titulo,
                    Content = pagina
                };

                return new Tuple<bool, ShellContent>(true, conteudoCriado);
            }

            return new Tuple<bool, ShellContent>(false, default);
        }

        public async void MostrarMensagem(string texto)
        {
            if (CurrentPage != null && !string.IsNullOrEmpty(texto))
            {
                await CurrentPage.DisplayAlert(string.Empty, texto, "OK").ConfigureAwait(false);
            }
        }

        public async void MostrarMensagem(string titulo, string texto)
        {
            if (CurrentPage != null && !string.IsNullOrEmpty(titulo) && !string.IsNullOrEmpty(texto))
            {
                await CurrentPage.DisplayAlert(titulo, texto, "OK").ConfigureAwait(false);
            }
        }

        protected override bool OnBackButtonPressed()
        {
            var valor = base.OnBackButtonPressed();

            if (!valor)
            {
                Explorador?.MudarUltimaNavegacao();
            }

            return true;
        }
    }
}
