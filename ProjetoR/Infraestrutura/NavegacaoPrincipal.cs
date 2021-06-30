using System;
using System.Linq;
using ProjetoR.Contrato.Abstrato;
using ProjetoR.Contrato.Interface;
using ProjetoR.Utilidade;
using Xamarin.Forms;

namespace ProjetoR.Infraestrutura
{
    public class NavegacaoPrincipal<T> : NavigationPage, NavegacaoSimples where T : Pagina
    {
        public NavegacaoPrincipal()
        {
            MudarPagina<T>();
        }

        public Tuple<bool, ShellContent> AdicionarConteudo(Pagina conteudo)
        {
            throw new NotImplementedException();
        }

        public async void MudarPagina<TK>() where TK : Pagina
        {
            var pagina = Navigation.NavigationStack.FirstOrDefault(x => x.GetType() == typeof(TK));

            if (pagina == null)
            {
                var (resultado, paginaCriada) = this.Criar<TK, NavigationPage>();

                if (resultado)
                {
                    SetHasNavigationBar(paginaCriada, false);

                    pagina = paginaCriada;
                }
            }
            else
            {
                Navigation.RemovePage(pagina);
            }

            if (pagina != null)
            {
                await PushAsync(pagina, false).ConfigureAwait(false);
            }
        }

        public void MudarPagina<TK>(TK pagina) where TK : Pagina
        {
            throw new NotImplementedException();
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
                await CurrentPage.DisplayAlert(string.Empty, texto, "OK").ConfigureAwait(false);
            }
        }

        protected override bool OnBackButtonPressed()
        {
            var valor = base.OnBackButtonPressed();
            var listaPaginas = Navigation.NavigationStack;

            return valor;
        }
    }
}
