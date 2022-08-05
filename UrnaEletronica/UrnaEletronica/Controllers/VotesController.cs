using Intro;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace UrnaEletronica.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VotesController : ControllerBase
    {
        private readonly UrnaEletronicaContext _context;

        private readonly ILogger<VotesController> _logger;

        public VotesController(ILogger<VotesController> logger, UrnaEletronicaContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> RegistrarVotos(RegistroVoto registroVoto)
        {
            await _context.RegistroVotos.AddAsync(registroVoto);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> ResultadoCandidatos()
        {
            var candidatos = await _context.Candidatos.ToListAsync();
            foreach (var candidato in candidatos)
            {
                candidato.QtdVotos = await _context.RegistroVotos.CountAsync(r => r.IdCandidato == candidato.Id);
            }
            return Ok(candidatos);
        }
    }
}