using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JxMobileWeb.Data;
using JxMobileWeb.Repository.Interfaces;
using JxMobileWeb.Repository.LocalDB.Infrastructure;


namespace JxMobileWeb.Repository.LocalDB
{
    public class RecordRepositoryLocal : GenericRepository, IRecordRepository
    {
        public IList<Data.vReportListForSearch> GetList()
        {
            return GetQuery<vReportListForSearch>().ToList();
        }

        public Data.vReportListForSearch GetById()
        {
            throw new NotImplementedException();
        }

        public Data.vReportListForSearch GetNewOne()
        {
            throw new NotImplementedException();
        }

        public Data.vReportListForSearch AddCarMain()
        {
            throw new NotImplementedException();
        }
    }
}
