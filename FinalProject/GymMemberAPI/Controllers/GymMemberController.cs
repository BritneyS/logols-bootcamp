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

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]GymMemberAPI.Member Member)
        {
           repository.Insert(Member);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
