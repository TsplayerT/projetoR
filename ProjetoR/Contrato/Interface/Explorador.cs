using System.Collections.Generic;
using Xamarin.Forms;

namespace ProjetoR.Contrato.Interface
{
    public interface Explorador
    {
        List<Navegacao> ListaNavegacoes { get; }

        TK Iniciar<TK>() where TK : Page, Navegacao;
        void MudarNavegacao<TK>() where TK : Page, Navegacao;
        void MudarUltimaNavegacao();
    }
}
