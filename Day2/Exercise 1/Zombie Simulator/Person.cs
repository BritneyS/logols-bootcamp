using System;

namespace ZombieSimulator
{
    public abstract class Person
    {
        public decimal DistanceTraveled {get; set;}

        public Person(){
            Console.WriteLine("A new person has been created");
        }

        public virtual void Walk(decimal minutes){
            this.DistanceTraveled = DistanceTraveled * minutes;
        }
    }
}