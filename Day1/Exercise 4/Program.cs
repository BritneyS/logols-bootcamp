using System;
using System.Collections.Generic;
using System.Linq;


namespace Exercise_4
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> aliveEmployeeList = new List<string>();  
                aliveEmployeeList.Add("Jane");
                aliveEmployeeList.Add("Mark");
                aliveEmployeeList.Add("Scott");
                aliveEmployeeList.Add("Lisa");
                aliveEmployeeList.Add("Kim");
                aliveEmployeeList.Add("Mike");
                aliveEmployeeList.Add("Jack");
                aliveEmployeeList.Add("Sue");
                aliveEmployeeList.Add("Chris");
                aliveEmployeeList.Add("Michele");
            

            foreach (string employee in aliveEmployeeList) {
                    Console.WriteLine(employee +": Alive");
            }


        }
    }
}
