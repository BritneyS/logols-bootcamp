using System;

namespace ZombieSimulator
{
    public sealed class Zombie : Person
    {
        public override void Walk(decimal minutes){
            this.DistanceTraveled = (DistanceTraveled * minutes) / 4;
            Console.WriteLine("Brainssss!");
        }
    }
}