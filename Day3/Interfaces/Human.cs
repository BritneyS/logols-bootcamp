using System;

namespace ZombieSimulator2
{
    public sealed class Human : IPerson
    {
        public decimal DistanceTraveled {get; set;}
        public void Walk(decimal minutes){
            this.DistanceTraveled = DistanceTraveled * minutes;
            Console.WriteLine("Don't eat me!");
        } 

        public void Run (decimal minutes){
            this.DistanceTraveled = (DistanceTraveled * minutes) * 2;
            Console.WriteLine("Don't eat me!");
        }
    }
}