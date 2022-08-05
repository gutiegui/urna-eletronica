using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using UrnaEletronica;

namespace Intro;

public class UrnaEletronicaContext : DbContext
{
    public DbSet<Candidato> Candidatos { get; set; }
    public DbSet<RegistroVoto> RegistroVotos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(
            @"Server=(localdb)\mssqllocaldb;Database=Eleicao;Trusted_Connection=True");
    }

    public UrnaEletronicaContext()
    {
        Database.Migrate();
        Database.EnsureCreated();

    }
}