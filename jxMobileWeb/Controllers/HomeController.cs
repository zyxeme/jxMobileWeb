using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using JXM.Data;
using JXM.Domain.LocalDB;
using JXM.Domain.LocalDB.Infrastructure;

namespace JXM.MobileWeb.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            //JXMobileDBContext context = new JXMobileDBContext();
            //IList<vReportListForSearch> records = context.vReportListForSearch.AsQueryable().ToList();

            //GenericRepository repo = new GenericRepository();
            //IList<vReportListForSearch> records = repo.GetQuery<vReportListForSearch>().ToList();

            RecordRepositoryLocal repoLocal = new RecordRepositoryLocal();
            IList<vReportListForSearch> records = repoLocal.GetList();

            return View(records);
        }

    }
}
