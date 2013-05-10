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
    [HandleError(View = "Error")]
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
            //JXMobileDBContext context = new JXMobileDBContext();
            //IList<vReportListForSearch> records = context.vReportListForSearch.AsQueryable().ToList();

            //GenericRepository repo = new GenericRepository();
            //IList<vReportListForSearch> records = repo.GetQuery<vReportListForSearch>().ToList();

            //RecordRepositoryLocal repoLocal = new RecordRepositoryLocal();
            //IList<vReportListForSearch> records = repoLocal.GetList();

            IList<vReportListForSearch> records = recordRepository.GetList();

            return View(records);
        }

    }
}
