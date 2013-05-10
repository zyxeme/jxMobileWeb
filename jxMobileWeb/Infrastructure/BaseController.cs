using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using log4net;
using Spring.Context;
using Spring.Context.Support;

namespace JXM.MobileWeb.Infrastructure
{
    public class BaseController : Controller
    {
        protected static IApplicationContext context = new XmlApplicationContext(System.Web.HttpContext.Current.Server.MapPath(@"~/Objects.config"));
        protected static readonly ILog logger = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        public virtual ActionResult MenuButton(string ButtonId, string RouteMenu, string selectedIndex = "")
        {
            return Redirect("./Index");
        }
    }
}