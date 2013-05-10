using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JXM.Common.Exceptions
{
    class JXMAPIException : AbstractException
    {
        protected JXMAPIException()
            : base()
        {
        }

        protected JXMAPIException(System.Runtime.Serialization.SerializationInfo info,
            System.Runtime.Serialization.StreamingContext context)
            : base(info, context)
        {
        }

        public JXMAPIException(String errorMessage)
            : base(errorMessage)
        {
        }

        public JXMAPIException(String errorMessage, System.Exception exp)
            : base(errorMessage, exp)
        {
        }
    }
}
