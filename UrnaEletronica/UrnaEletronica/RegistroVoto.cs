using System.ComponentModel.DataAnnotations;

namespace UrnaEletronica
{
    public class RegistroVoto
    {
        public DateTime DataVoto { get; set; }
        public int IdCandidato { get; set; }
        public int Id { get; set; }
    }
}