using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using JXM.Data;
using JXM.Domain.Infrastructure;

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

            GenericRepository repo = new GenericRepository();
            IList<vReportListForSearch> records = repo.GetQuery<vReportListForSearch>().ToList();

            return View(records);
        }

    }
}
