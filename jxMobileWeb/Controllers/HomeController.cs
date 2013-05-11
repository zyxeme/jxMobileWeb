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
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

    }
}
