using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JxMobileWeb.Common.Exceptions
{
    public class JXMBusinessException : AbstractException
    {
        protected JXMBusinessException()
            : base()
        {
        }

        protected JXMBusinessException(System.Runtime.Serialization.SerializationInfo info,
            System.Runtime.Serialization.StreamingContext context)
            : base(info, context)
        {
        }

        public JXMBusinessException(String errorMessage)
            : base(errorMessage)
        {
        }

        public JXMBusinessException(String errorMessage, System.Exception exp)
            : base(errorMessage, exp)
        {
        }
    }
}
