using System.ComponentModel.DataAnnotations;
using Api.Service;

namespace Api.Model
{
    public class Usuario : BaseModel
    {
        [Required(ErrorMessage = "Campo obrigatório.")]
        public string Nome { get; set; }

    }
}