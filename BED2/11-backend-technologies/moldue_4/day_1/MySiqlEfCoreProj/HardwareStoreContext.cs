using Microsoft.EntityFrameworkCore;
using MySql.EntityFrameworkCore.Extensions;

namespace MySiqlEfCoreProj;

public class HardwareStoreContext : DbContext
{
  public DbSet<Tool> Tool {get; set;}
  public DbSet<Brand> Brand {get; set;}
  public DbSet<Category> Category {get; set;}

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    optionsBuilder.UseMySQL("server=localhost;database=hardwarestore;user=root;password=asdf1234");
  }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    base.OnModelCreating(modelBuilder);
    modelBuilder.Entity<Brand>(entity =>
    {
      entity.HasKey(e => e.ID);
      entity.Property(e => e.Name).IsRequired();
    });

    modelBuilder.Entity<Tool>(entity =>
    {
      entity.HasKey(entity => entity.ID);
      entity.Property(e => e.Name).IsRequired();
      entity.Property(e => e.Price).IsRequired();
      entity.HasOne(d => d.Brand).WithMany(p => p.Tools);
      entity.HasOne(d => d.Category).WithMany(p => p.Tools);
    });

    modelBuilder.Entity<Category>(entity =>
    {
      entity.HasKey(entity => entity.ID);
      entity.Property(entity => entity.Name).IsRequired();

    });
  }
}

