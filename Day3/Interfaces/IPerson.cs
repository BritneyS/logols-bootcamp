using System;

namespace ZombieSimulator2
{
    public interface IPerson
    {
        decimal DistanceTraveled {get; set;}

        void Walk(decimal minutes);
        
    }
}