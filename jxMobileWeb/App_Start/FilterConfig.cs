using System.Web;
using System.Web.Mvc;
using JxMobileWeb.Infrastructure;

namespace JxMobileWeb
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new JXMHandleErrorAttribute());
        }
    }
}