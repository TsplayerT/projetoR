using System;
using ProjetoR.Contrato.Interface;
using Xamarin.Forms;

namespace ProjetoR.Contrato.Abstrato
{
    public abstract class Pagina : ContentPage, ConteudoVisual
    {
        public int Ordem { get; set; }
        public string Titulo { get; set; }
        public Type TipoPaginaPai { get; set; }
    }
}
