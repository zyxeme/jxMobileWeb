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
    public class CarInfoRepositoryLocal : GenericRepository, ICarInfoRepository
    {
        public IList<CarInfo> GetCarList()
        {
            return GetQuery<CarInfo>().ToList();
        }
    }
}
