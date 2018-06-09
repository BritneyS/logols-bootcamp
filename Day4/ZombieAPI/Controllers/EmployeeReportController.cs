using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ZombieAPI;

namespace ZombieAPI.Controllers
{
    [Route("api/[controller]")] //URL: .../api/[controller] where [controller] is controller name
    public class EmployeeReportController : Controller
    {
        EmployeeReportRepository repository;

        public EmployeeReportController()
        {
            repository = new EmployeeReportRepository();
        }

        // GET api/EmployeeReport
        [HttpGet]
        public List<ZombieAPI.Person> Get()
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
        public void Post([FromBody]string value)
        {
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
