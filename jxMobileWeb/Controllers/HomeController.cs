using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using JXM.Data;
using JXM.Domain.Interfaces;
using JXM.Domain.LocalDB;
using JXM.Domain.LocalDB.Infrastructure;
using JXM.MobileWeb.Infrastructure;

namespace JXM.MobileWeb.Controllers
{
    public class HomeController : BaseController
    {
        private IRecordRepository recordRepository;

        public HomeController() : this((IRecordRepository)context.GetObject("RecordRepository"))
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
            throw new Exception("Oops");

            IList<vReportListForSearch> records = recordRepository.GetList();

            return View(records);
        }

    }
}
