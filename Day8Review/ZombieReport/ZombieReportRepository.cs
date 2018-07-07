using System;
using System.Collections.Generic;



using System.Data;
using System.Linq;
using Dapper;

namespace ZombieReport
{
    public class ZombieReportRepository : Repository
    {
        public List<Person> GetAll()
        {
             using (IDbConnection dbConnection = Connection) //Connection: property that exists in base class Repository
            {
                dbConnection.Open();

                string sql = "SELECT Person.FirstName, Person.LastName, Person.PersonStatusID, PStatus.StatusDescription "
                + "FROM zombiereport.person Person "
                + "INNER JOIN zombie.personstatus PStatus "
                + "ON Person.PersonStatusID = PStatus.PersonStatusID;";

                return dbConnection.Query<Person>(sql, commandType: CommandType.Text).ToList();

            }
        }

        public void Insert(Person Person)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                dbConnection.Execute(
                    "INSERT into zombiereport.person (FirstName, LastName, PersonStatusID) "
                    + "VALUES (@FirstName, @LastName, @PersonStatusID);",
                     new {

                        FirstName = Person.FirstName,
                        LastName = Person.LastName,
                        PersonStatusID = Person.PersonStatusID
                    },
                    commandType: CommandType.Text
                );

            }
        }
    }
 
}