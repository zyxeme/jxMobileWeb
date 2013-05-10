using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JXM.MobileWeb.Controllers
{
    public class ErrorController : Controller
    {
        public ActionResult ServerError()
        {
            return View();
        }

        public ActionResult NotFoundError()
        {
            return View();
        }

        public ActionResult AccessDeniedError()
        {
            return View();
        }
    }
}
