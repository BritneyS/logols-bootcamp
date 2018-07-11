using System;

namespace GymMemberAPI
{
    public class Member
    {
        public int MemberID {get; set;}
        public string FirstName {get; set;}
        public string LastName {get; set;}

        //joined
        public string MemberStatusDescription {get; set;}
        public string ClassDescription {get; set;}
        
    }
}