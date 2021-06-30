using System;
using System.Collections.Generic;
using ProjetoR.Contrato.Abstrato;
using Xamarin.Forms;
using TipoCampanha = ProjetoR.Utilidade.Enumerador.TipoCampanha;

namespace ProjetoR.Contrato.Interface
{
    public interface CriadorConteudo<T>
    {
        List<T> CriarListaConteudo<TK>(TK navegacao, TipoCampanha tipoCampanha = default) where TK : Shell, Navegacao;
        Tuple<bool, T> CriarConteudoPagina<TK, TL>(TK navegacao) where TK : Shell, Navegacao where TL : Pagina;
        Tuple<bool, T> CriarConteudoPagina<TK, TL>(TK navegacao, TL pagina) where TK : Shell, Navegacao where TL : Pagina;
    }
}
