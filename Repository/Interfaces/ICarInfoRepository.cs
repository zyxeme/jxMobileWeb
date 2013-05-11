using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JxMobileWeb.Data;

namespace JxMobileWeb.Repository.Interfaces
{
    public interface ICarInfoRepository
    {
        IList<CarInfo> GetCarList();
    }
}
