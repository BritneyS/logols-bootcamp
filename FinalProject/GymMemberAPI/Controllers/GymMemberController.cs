using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace GymMemberAPI.Controllers
{
    [Route("api/[controller]")] //URL: .../api/[controller] where [controller] is controller name
    public class GymMemberController : Controller
    {
        GymMemberRepository repository;

        public GymMemberController()
        {
            repository = new GymMemberRepository();
        }

        // GET api/GymMember
        [HttpGet]
        public List<GymMemberAPI.Member> Get()
        {
            return repository.GetAll();
        }

        // GET api/GymMember/5
        [HttpGet("{id}")]
        public Member Get(int id)
        {
            return repository.Get(id);
        }

        // POST api/GymMember
        [HttpPost]
        public void Post([FromBody]GymMemberAPI.Member Member)
        {
           repository.Insert(Member);
        }

        // PUT api/GymMember/5
        //[HttpPut("{id}")]
        [HttpPut]
        public void Put(/*int id,*/ [FromBody]GymMemberAPI.Member Member)
        {
            repository.Update(Member);
        }

        // DELETE api/GymMember/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            repository.Delete(id);
        }
    }
}
