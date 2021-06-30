using System;
using System.Linq;
using ProjetoR.Contrato.Abstrato;
using ProjetoR.Contrato.Interface;
using ProjetoR.Utilidade;
using Xamarin.Forms;

namespace ProjetoR.Infraestrutura
{
    public class NavegacaoCampanha<T> : NavegacaoPadrao, NavegacaoComplexa where T : Pagina
    {
        public NavegacaoCampanha()
        {
            var (criado, pagina) = this.Criar<T, NavegacaoCampanha<T>>();

            if (criado)
            {
                var (resultado, tipoCampanha) = pagina.PegarTipoCampanha();

                if (resultado)
                {
                    CriarListaConteudo(this, tipoCampanha).ForEach(x => AdicionarConteudo(x));

                    MudarPagina<T>();
                }
            }
        }

        public Tuple<bool, ShellItem> AdicionarConteudo(ShellContent conteudo)
        {
            var item = Items?.FirstOrDefault() ?? new ShellItem();

            if (conteudo != null)
            {
                var tipoPaginaPai = conteudo.Content is Pagina pagina ? pagina.TipoPaginaPai : typeof(Pagina);
                var sessaoSalva = Items?.SelectMany(x => x.Items).FirstOrDefault(x => x.Items.Select(p => p.Content).OfType<Pagina>().Any(p => p.GetType() == tipoPaginaPai));

                if (sessaoSalva != null)
                {
                    sessaoSalva.Items.Add(conteudo);

                    return new Tuple<bool, ShellItem>(true, sessaoSalva);
                }

                var sessaoCriada = new ShellSection
                {
                    Title = conteudo.Title,
                    Items =
                    {
                        conteudo
                    }
                };

                item.Items.Add(sessaoCriada);
                item.Title = conteudo.Title;

                if (Items?.Count == 0)
                {
                    Items?.Add(item);
                }

                return new Tuple<bool, ShellItem>(true, sessaoCriada);
            }

            return new Tuple<bool, ShellItem>(false, default);
        }

        public void MudarPagina<TK>() where TK : Pagina
        {
            var conteudo = FuncaoProcurarConteudo?.Invoke(Items, typeof(TK));

            if (conteudo == null)
            {
                var (criado, conteudoCriado) = CriarConteudoPagina<NavegacaoCampanha<T>, TK>(this);

                if (criado)
                {
                    var (definido, sessao) = AdicionarConteudo(conteudoCriado);

                    if (definido)
                    {
                        conteudo = sessao;
                    }
                }
            }

            if (conteudo != null)
            {
                CurrentItem = conteudo;
            }
        }

        public void MudarPagina<TK>(TK pagina) where TK : Pagina
        {
            var conteudo = FuncaoProcurarConteudo?.Invoke(Items, typeof(TK));

            if (conteudo == null)
            {
                conteudo = new ShellContent
                {
                    Title = pagina.Titulo,
                    Content = pagina
                };

                Items?.Add(conteudo);
            }

            CurrentItem = conteudo;
        }
    }
}
