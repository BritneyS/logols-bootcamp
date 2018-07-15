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

                string sql = "SELECT m.MemberID, m.FirstName, m.LastName, ms.MemberStatusDescription, c.ClassDescription " 
                + "FROM gym.member m "
                + "INNER JOIN gym.memberstatus ms "
                + "ON m.MemberStatusID = ms.MemberStatusID "
                + "LEFT OUTER JOIN gym.class c "
                + "ON m.ClassID = c.ClassID " 
                + "ORDER BY MemberID ASC;";

                return dbConnection.Query<Member>(sql, commandType: CommandType.Text).ToList();

            }
        }

        public void Insert(Member Member)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                dbConnection.Execute(
                    "INSERT into gym.member (FirstName, LastName, MemberStatusID, ClassID) "
                    + "VALUES (@FirstName, @LastName, @MemberStatusID, @ClassID);",
                     new {

                        FirstName = Member.FirstName,
                        LastName = Member.LastName,
                        MemberStatusID = Member.MemberStatusID,
                        ClassID = Member.ClassID
                    },
                    commandType: CommandType.Text
                );

            }
        }

        public void Delete(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                dbConnection.Execute(
                    "DELETE "
                    + "FROM member "
                    + "WHERE member.MemberID = @MemberID;"
                    ,new {MemberId = id} ,commandType: CommandType.Text);
            }
        }
    }
 
}