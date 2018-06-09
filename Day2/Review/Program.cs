using System;
//Day1 review
namespace Day2
{
    class Program
    {

        private static string StatusCheck (int status_id) {
            if (status_id == 1){
                return "Alive";
            }
            else if (status_id == 2){
                return "Zombie";
            }
            else if (status_id == 3){
                return "Dead";
            }
            else if (status_id == 4){
                return "Unknown";
            }
            else {
                return "Unknown";
            }

        }
        static void Main(string[] args)
        {
            int[] statuses = new int[] {1, 4, 3, 2};
            /* string status = " ";

            string[] status_name = new string[] {};

            for (int i = 0; i < statuses.Length; i++){
                if (statuses[i] == 1){
                    Console.WriteLine("Alive");
                    status_name[i] = "Alive";
                }
                else if (statuses[i] == 2){
                    Console.WriteLine("Zombie");
                    status_name[i] = "Zombie";
                }
                else if (statuses[i] == 3){
                    Console.WriteLine("Dead");
                    status_name[i] = "Dead";
                }
                else if (statuses[i] == 4){
                    Console.WriteLine("Unknown");
                    status_name[i] = "Unknown";
                } 
            } */

            for (int i = 0; i < statuses.Length; i++){
                Console.WriteLine(StatusCheck(statuses[i]));
            }
        }
    }
}
