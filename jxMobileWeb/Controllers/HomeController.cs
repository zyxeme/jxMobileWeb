using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using JxMobileWeb.Data;
using JxMobileWeb.Infrastructure;
using JxMobileWeb.Repository.Interfaces;

namespace JxMobileWeb.Controllers
{
    public class HomeController : BaseController
    {
        private IRecordRepository recordRepository;

        public HomeController()
            : this((IRecordRepository)context.GetObject("RecordRepository"))
        {
        }

        public HomeController(IRecordRepository repository)
        {
            this.recordRepository = repository;
        }

        //
        // GET: /Home/

        public ActionResult Index()
        {
            IList<vReportListForSearch> records = recordRepository.GetList();

            return View(records);
        }
    }
}
