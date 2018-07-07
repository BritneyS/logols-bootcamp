using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ZombieReport;

namespace ZombieReport.Controllers
{
    [Route("api/[controller]")] //URL: .../api/[controller] where [controller] is controller name
    public class ZombieReportController : Controller
    {
        ZombieReportRepository repository;

        public ZombieReportController()
        {
            repository = new ZombieReportRepository();
        }

        // GET api/ZombieReport
        [HttpGet]
        public List<ZombieReport.Person> Get()
        {
            return repository.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        /* public string Get(int id)
        {
            return repository.Get(id);
        } */

        // POST api/values
        [HttpPost]
        public void Post([FromBody]ZombieReport.Person Person)
        {
            repository.Insert(Person);
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
