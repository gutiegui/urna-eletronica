using Intro;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace UrnaEletronica.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CandidateController : ControllerBase
    {
        private readonly UrnaEletronicaContext _context;

        private readonly ILogger<VotesController> _logger;

        public CandidateController(ILogger<VotesController> logger, UrnaEletronicaContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult>  RegistrarCandidatos(Candidato candidato)
        {
            await _context.Candidatos.AddAsync(candidato);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete]
        public IActionResult DeletarCandidatos(int id)
        {
            var candidato = _context.Candidatos.FirstOrDefault(c => c.Id == id);
            _context.Remove(candidato);
            _context.SaveChanges();
            return Ok();
        }

        
    }
}