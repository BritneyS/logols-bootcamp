using System;
using System.Collections.Generic;
using ZombieSimulator2;

namespace Interfaces
{
    class Program
    {
        static void Main(string[] args)
        {
            /* 
            Human Jane = new Human();
            Jane.DistanceTraveled = 50;
            decimal distance = Jane.DistanceTraveled;
            Console.WriteLine("Jane: " + distance);
            Jane.Walk(5);
            Console.WriteLine("Jane: Walk: " + Jane.DistanceTraveled);
            Jane.DistanceTraveled = 50;
            Jane.Run(5);
            Console.WriteLine("Jane: Run: " + Jane.DistanceTraveled);

            Zombie Drew = new Zombie();
            Drew.DistanceTraveled = 30;
            decimal distance2 = Drew.DistanceTraveled;
            Console.WriteLine("Drew: " + distance2);
            Drew.Walk(5);
            Console.WriteLine("Drew: Walk: " + Drew.DistanceTraveled);
            */

            List<IPerson> people = new List<IPerson>();
            people.Add(new Human());
            people.Add(new Zombie());
            people.Add(new Human());

            foreach(IPerson person in people)
            {
                person.Walk(5);
                Console.WriteLine(person.DistanceTraveled);
            }
        }
    }
}
