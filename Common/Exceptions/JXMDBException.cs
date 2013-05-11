using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JxMobileWeb.Common.Exceptions
{
    class JXMDBException : AbstractException
    {
        protected JXMDBException()
            : base()
        {
        }

        protected JXMDBException(System.Runtime.Serialization.SerializationInfo info,
            System.Runtime.Serialization.StreamingContext context)
            : base(info, context)
        {
        }

        public JXMDBException(String errorMessage)
            : base(errorMessage)
        {
        }

        public JXMDBException(String errorMessage, System.Exception exp)
            : base(errorMessage, exp)
        {
        }
    }
}
