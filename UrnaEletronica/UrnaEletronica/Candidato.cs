using System.ComponentModel.DataAnnotations.Schema;

namespace UrnaEletronica
{
    public class Candidato
    {
        public int Id { get; set; }
        public string NomeCandidato { get; set; }

        public string NomeVice { get; set; }

        public DateTime DataRegistro { get; set; }

        public int Legenda { get; set; }
        [NotMapped]
        public int QtdVotos { get; set; }
    }
}