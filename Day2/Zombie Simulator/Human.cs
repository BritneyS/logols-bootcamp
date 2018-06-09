using System;

namespace ZombieSimulator
{
    public sealed class Human : Person
    {
        /* public override void Walk(decimal minutes){
            this.DistanceTraveled = DistanceTraveled * minutes;
            Console.WriteLine("Don't eat me!");
        } */

        public void Run (decimal minutes){
            this.DistanceTraveled = (DistanceTraveled * minutes) * 2;
            Console.WriteLine("Don't eat me!");
        }
    }
}