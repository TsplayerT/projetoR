using System;
using System.Collections.Generic;
using System.Linq;
using ProjetoR.Contrato.Interface;
using ProjetoR.Utilidade;
using Xamarin.Forms;

namespace ProjetoR.Infraestrutura
{
    public class Gerenciador : Explorador
    {
        public List<Navegacao> ListaNavegacoes { get; }

        public Gerenciador()
        {
            ListaNavegacoes = new List<Navegacao>();
        }

        public TK Iniciar<TK>() where TK : Page, Navegacao => TratarNavegacao<TK>();

        private TK TratarNavegacao<TK>() where TK : Page, Navegacao
        {
            var navegacaoSalva = ListaNavegacoes.Find(x => x.GetType() == typeof(TK));

            if (navegacaoSalva is TK navegacaoSalvaConvertida)
            {
                return navegacaoSalvaConvertida;
            }

            var (resultado, navegacaoCriada) = this.Criar<TK, Explorador>();

            if (resultado)
            {
                ListaNavegacoes.Add(navegacaoCriada);

                return navegacaoCriada;
            }

            return default;
        }

        public void MudarNavegacao<TK>() where TK : Page, Navegacao
        {
            var navegacao = TratarNavegacao<TK>();

            Application.Current.MainPage = navegacao;
        }

        public void MudarUltimaNavegacao()
        {
            var navegacao = ListaNavegacoes?.LastOrDefault(x => x != ListaNavegacoes?.LastOrDefault());

            if (navegacao is Page navegacaoConvertida)
            {
                Application.Current.MainPage = navegacaoConvertida;
            }
        }
    }
}
