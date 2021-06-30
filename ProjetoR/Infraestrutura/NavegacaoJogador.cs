using System;
using ProjetoR.Contrato.Abstrato;
using ProjetoR.Contrato.Interface;
using Xamarin.Forms;

namespace ProjetoR.Infraestrutura
{
    public class NavegacaoJogador<T> : NavegacaoPadrao, NavegacaoComplexa where T : Pagina
    {
        public NavegacaoJogador()
        {
            CriarListaConteudo(this).ForEach(x => AdicionarConteudo(x));

            MudarPagina<T>();
        }

        public Tuple<bool, ShellItem> AdicionarConteudo(ShellContent conteudo)
        {
            var item = new ShellItem
            {
                Title = conteudo.Title,
                Items =
                {
                    conteudo
                }
            };

            Items?.Add(item);

            return new Tuple<bool, ShellItem>(true, item);
        }

        public void MudarPagina<TK>() where TK : Pagina
        {
            var conteudo = FuncaoProcurarConteudo?.Invoke(Items, typeof(TK));

            if (conteudo == null)
            {
                var (criado, conteudoCriado) = CriarConteudoPagina<NavegacaoJogador<T>, TK>(this);

                if (criado)
                {
                    var (definido, item) = AdicionarConteudo(conteudoCriado);

                    if (definido)
                    {
                        conteudo = item;
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
                conteudo = new ShellItem
                {
                    Title = pagina.Titulo,
                    Items =
                    {
                        new ShellSection
                        {
                            Title = pagina.Titulo,
                            Items =
                            {
                                new ShellContent
                                {
                                    Title = pagina.Titulo,
                                    Content = pagina
                                }
                            }
                        }
                    }
                };

                Items?.Add(conteudo);
            }

            CurrentItem = conteudo;
        }
    }
}
