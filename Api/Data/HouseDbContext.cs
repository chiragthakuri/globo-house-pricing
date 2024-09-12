using Microsoft.EntityFrameworkCore;

public class HouseDbContext: DbContext
{
    // Constructor that accepts DbContextOptions
        public HouseDbContext(DbContextOptions<HouseDbContext> options)
            : base(options)
        {
        }
    public DbSet<HouseEntity> Houses => Set<HouseEntity>();

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var folder = Environment.SpecialFolder.LocalApplicationData;

        var path = Environment.GetFolderPath(folder);

        optionsBuilder.UseSqlite($"Data Source = {Path.Join(path, "houses1.db")}");
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        SeedData.Seed(builder);
    }
}

