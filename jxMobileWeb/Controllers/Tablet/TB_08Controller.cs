using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using JxMobileWeb.Infrastructure;
using JxMobileWeb.Repository.Interfaces;

namespace JxMobileWeb.Controllers.Tablet
{
    public class TB_08Controller : BaseController
    {
        private IRecordRepository recordRepository;

        public TB_08Controller()
            : this((IRecordRepository)context.GetObject("RecordRepository"))
        {
        }

        public TB_08Controller(IRecordRepository recordRepo)
        {
            this.recordRepository = recordRepo;
        }

        public ActionResult Index()
        {
            return View();
        }

    }
}
