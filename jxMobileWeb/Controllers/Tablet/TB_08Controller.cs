using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using JxMobileWeb.Data;
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
            return Redirect("List");
        }

        public ActionResult List()
        {
            //IList<vReportListForSearch> records = recordRepository.GetList();

            IList<Tb08Model> records = new List<Tb08Model>();

            records.Add(
                new Tb08Model
                {
                    hno = "5",
                    date = "03/21",
                    hnoTime = "12:47",
                    endTime = "10:17",
                    carNo1 = "品川",
                    carNo2 = "302",
                    carNo3 = "か",
                    carNo4 = "9527",
                    customerName = "山田 太郎",
                    customerNameKana = "ヤマダ　タロウ",
                    isShow = true
                });

            return View(records);
        }
    }

    // TODO: just for test
    public class Tb08Model
    {
        public string hno { get; set; }
        public string date { get; set; }
        public string hnoTime { get; set; }
        public string endTime { get; set; }
        public string carNo1 { get; set; }
        public string carNo2 { get; set; }
        public string carNo3 { get; set; }
        public string carNo4 { get; set; }
        public string carType { get; set; }
        public string customerName { get; set; }
        public string customerNameKana { get; set; }
        public bool isShow { get; set; }
    }
}
