using System;
using System.Collections.Generic;



using System.Data;
using System.Linq;
using Dapper;

namespace GymMemberAPI
{
    public class GymMemberRepository : Repository
    {
        public List<Member> GetAll()
        {
            using (IDbConnection dbConnection = Connection) //Connection: property that exists in base class Repository
            {
                dbConnection.Open();

                string sql = "SELECT m.MemberID, m.FirstName, m.LastName, m.MemberStatusID, c.ClassID, ms.MemberStatusDescription, c.ClassDescription " 
                + "FROM member m "
                + "INNER JOIN memberstatus ms "
                + "ON m.MemberStatusID = ms.MemberStatusID "
                + "LEFT OUTER JOIN Class c "
                + "ON m.ClassID = c.ClassID " 
                + "ORDER BY MemberID ASC;";

                return dbConnection.Query<Member>(sql, commandType: CommandType.Text).ToList();

            }
        }

        /* public void Insert(Person Person)
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
        } */
    }
 
}