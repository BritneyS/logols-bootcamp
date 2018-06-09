using System;
using System.Collections.Generic;
using RepoExample;


using System.Data;
using System.Linq;
using Dapper;

namespace RepoExample
{
    public class EmployeeReportRepository : Repository
    {
        public List<Person> GetAll()
        {
            using (IDbConnection dbConnection = Connection) //Connection: property that exists in base class Repository
            {
                dbConnection.Open();

                string sql = "SELECT Person.FirstName, Person.LastName, PStatus.StatusDescription "
                + "FROM zombie.person Person "
                + "INNER JOIN zombie.personstatus PStatus "
                + "ON Person.PersonStatusID = PStatus.PersonStatusID;";

                return dbConnection.Query<Person>(sql, commandType: CommandType.Text).ToList();

            }
        }
    }
}