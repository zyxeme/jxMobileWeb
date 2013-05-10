using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JXM.Common.Exceptions
{
    [Serializable]
    public abstract class AbstractException : Exception
    {
        protected AbstractException()
            : base()
        {
        }

        protected AbstractException(System.Runtime.Serialization.SerializationInfo info,
            System.Runtime.Serialization.StreamingContext context)
            : base(info, context)
        {
        }

        protected AbstractException(String errorMessage)
            : base(errorMessage)
        {
        }

        protected AbstractException(String errorMessage, System.Exception exp)
            : base(errorMessage, exp)
        {
        }
    }
}
