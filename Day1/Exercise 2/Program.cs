using System;

namespace Exercise_2
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] status = new int[] {1, 2, 3, 4};

            for (int i = 0; i < status.Length; i++) {
                if (status[i] == 1) {
                    Console.WriteLine("Alive");
                } else if (status[i] == 2) {
                    Console.WriteLine("Zombie");
                } else if (status[i] == 3) {
                    Console.WriteLine("Dead");
                } else if (status[i] == 4) {
                    Console.WriteLine("Unknown");
                }
            }
            //----------
            int j = 0;
            while (j < status.Length) {
                if (status[j] == 1) {
                    Console.WriteLine("Alive");
                } else if (status[j] == 2) {
                    Console.WriteLine("Zombie");
                } else if (status[j] == 3) {
                    Console.WriteLine("Dead");
                } else if (status[j] == 4) {
                    Console.WriteLine("Unknown");
                }
                j++;
            } 
            //-----------
            int k = 0;
            do {
                if (status[k] == 1) {
                    Console.WriteLine("Alive");
                } else if (status[k] == 2) {
                    Console.WriteLine("Zombie");
                } else if (status[k] == 3) {
                    Console.WriteLine("Dead");
                } else if (status[k] == 4) {
                    Console.WriteLine("Unknown");
                }
                k++;
            } while (k < status.Length);
            //-------
            foreach (int val in status) {
                if (val == 1) {
                    Console.WriteLine("Alive");
                } else if (val == 2) {
                    Console.WriteLine("Zombie");
                } else if (val == 3) {
                    Console.WriteLine("Dead");
                } else if (val == 4) {
                    Console.WriteLine("Unknown");
                }
            }

           string[] names = new string[] {"Jane", "John", "Sue", "Mike"};
           
            for (int l = 0; l < status.Length; l++) {
                if (status[l] == 1) {
                    Console.WriteLine(names[l] +": Alive");
                } else if (status[l] == 2) {
                    Console.WriteLine(names[l] +": Zombie");
                } else if (status[l] == 3) {
                    Console.WriteLine(names[l] +": Dead");
                } else if (status[l] == 4) {
                    Console.WriteLine(names[l] +": Unknown");
                }  
            }
        }
    }
}
