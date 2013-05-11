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
        private ICarInfoRepository carinfoRepository;

        public HomeController()
            : this((IRecordRepository)context.GetObject("RecordRepository"), (ICarInfoRepository)context.GetObject("CarInfoRepository"))
        {
        }

        public HomeController(IRecordRepository recordRepo, ICarInfoRepository carinfoRepo)
        {
            this.recordRepository = recordRepo;
            this.carinfoRepository = carinfoRepo;
        }

        //
        // GET: /Home/

        public ActionResult Index()
        {
            //IList<vReportListForSearch> records = recordRepository.GetList();
            IList<CarInfo> records = carinfoRepository.GetCarList();

            return View(records);
        }
    }
}
