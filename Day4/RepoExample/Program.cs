using System;
using System.Collections.Generic;


namespace RepoExample
{
    class Program
    {
        static void Main(string[] args)
        {
            EmployeeReportRepository repository = new EmployeeReportRepository();
            List<Person> employees = repository.GetAll();
            foreach(Person employee in employees)
            {
                Console.WriteLine($"{employee.FirstName} {employee.LastName} has status of {employee.StatusDescription}");
            }
        }
    }
}
