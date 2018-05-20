using System;

namespace Exercise_1
{
    class Program
    {
        static void Main(string[] args)
        {
            int status = 1;

            if (status == 1) {
                Console.WriteLine("Alive");
            } else if (status == 2) {
                Console.WriteLine("Zombie");
            } else if (status == 3) {
                Console.WriteLine("Dead");
            } else if (status == 4) {
                Console.WriteLine("Unknown");
            }

            //---------

            switch (status)
            {
                case 1:
                    Console.WriteLine("Alive");
                    break;
                case 2:
                    Console.WriteLine("Zombie");
                    break;
                case 3:
                    Console.WriteLine("Dead");
                    break;
                case 4:
                    Console.WriteLine("Unknown");
                    break;
                default:
                    Console.WriteLine("None");
                    break;
                
            }
        }
    }
}
