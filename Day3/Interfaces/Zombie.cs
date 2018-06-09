using System;


namespace ZombieSimulator2
{
    public sealed class Zombie : IPerson
    {
        public decimal DistanceTraveled {get; set;}
        public void Walk(decimal minutes){
            this.DistanceTraveled = (DistanceTraveled * minutes) / 4;
            Console.WriteLine("Brainssss!");
        }
    }
}