using System;
using ZombieSimulator;

namespace Exercise_1
{
    class Program
    {
        static void Main(string[] args)
        {
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
        }
    }
}
