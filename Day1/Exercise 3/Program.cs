using System;

namespace Exercise_3
{
    class Program
    {
        public static string checkStatus (int status, string name) {
            string status_name = " ";
            string name_text = name;
            switch (status)
            {
                case 1: 
                    status_name = "Alive";
                    break;
                case 2:
                    status_name = "Zombie";
                    break;
                case 3: 
                    status_name = "Dead";
                    break;
                case 4: 
                    status_name = "Unknown";
                    break;
                default: 
                    status_name = "None";
                    break;
            }

            return name_text +": "+ status_name;
        }

        static void Main(string[] args)
        {
            int[] status = new int[] {1, 2, 3, 4};
            string[] names = new string[] {"Jane", "John", "Sue", "Mike"};
            
            for (int i = 0; i < status.Length; i++) {
                Console.WriteLine(checkStatus(status[i], names[i]));
            }
            //-----
            void writeName (string name) {
                Console.WriteLine(name);
            }
        }

        
    }
}
