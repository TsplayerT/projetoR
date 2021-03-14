using System;

namespace Api.Interface
{
    public interface IModel
    {
        int Id { get; set; }
        DateTime ChangeDate { get; set; }
        DateTime CreationDate { get; set; }
    }
}
