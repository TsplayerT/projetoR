using System.ComponentModel.DataAnnotations;
using Api.Service;

namespace Api.Model
{
    public class Livro : BaseModel
    {
        [Required(ErrorMessage = "Campo obrigatório.")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Campo obrigatório.")]
        public string Autor { get; set; }

        public string Genero { get; set; }
    }
}