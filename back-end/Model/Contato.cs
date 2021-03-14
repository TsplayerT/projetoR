using System.ComponentModel.DataAnnotations;
using Api.Service;

namespace Api.Model
{
    public class Contato : BaseModel
    {
        [Required(ErrorMessage = "Campo obrigatório.")]
        public string Nome { get; set; }

        [DataType(DataType.EmailAddress)]
        [Required(ErrorMessage = "Campo obrigatório.")]
        public string Email { get; set; }

        public string Genero { get; set; }

        public int Idade { get; set; }
    }
}