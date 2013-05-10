using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Objects;
using System.Globalization;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using JXM.Data;

namespace JXM.Domain.LocalDB.Infrastructure
{
    public class GenericRepository : IGenericRepository
    {
        private DbContext _context;
        private IUnitOfWork _unitOfWork;

        /// <summary>
        /// Initializes a new instance of the <see cref="GenericRepository&lt;TEntity&gt;"/> class.
        /// </summary>
        public GenericRepository()
            : this(new JXMobileDBContext())
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="GenericRepository&lt;TEntity&gt;"/> class.
        /// </summary>
        /// <param name="context">The context.</param>
        public GenericRepository(DbContext context)
        {
            if (context == null)
                throw new ArgumentNullException("context");
            _context = context;
        }

        public IUnitOfWork UnitOfWork
        {
            get
            {
                if (_unitOfWork == null)
                {
                    _unitOfWork = new UnitOfWork(this.DbContext);
                }
                return _unitOfWork;
            }
        }

        public DbContext DbContext
        {
            get
            {
                if (this._context == null)
                {
                    this._context = new JXMobileDBContext();
                }
                return this._context;
            }
        }

        public IQueryable<TEntity> GetQuery<TEntity>() where TEntity : class
        {
            return GetQuery<TEntity>(null, null);
        }

        public IQueryable<TEntity> GetQuery<TEntity>(Expression<Func<TEntity, bool>> predicate = null, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null) where TEntity : class
        {
            IQueryable<TEntity> query = DbContext.Set<TEntity>().AsQueryable();

            if (predicate != null)
            {
                query = query.Where(predicate);
            }

            if (orderBy != null)
            {
                query = orderBy(query);
            }

            return query;
        }

        public TEntity Single<TEntity>(Expression<Func<TEntity, bool>> predicate) where TEntity : class
        {
            return GetQuery<TEntity>().Single<TEntity>(predicate);
        }

        public TEntity First<TEntity>(Expression<Func<TEntity, bool>> predicate) where TEntity : class
        {
            return GetQuery<TEntity>().First<TEntity>(predicate);
        }

        public void Add<TEntity>(TEntity entity) where TEntity : class
        {
            if (entity == null)
            {
                throw new ArgumentNullException("entity");
            }
            DbContext.Set<TEntity>().Add(entity);
        }

        public void Delete<TEntity>(TEntity entity) where TEntity : class
        {
            if (entity == null)
            {
                throw new ArgumentNullException("entity");
            }
            DbContext.Set<TEntity>().Remove(entity);
        }

        public void Delete<TEntity>(Expression<Func<TEntity, bool>> predicate) where TEntity : class
        {
            IQueryable<TEntity> records = GetQuery<TEntity>(predicate);

            foreach (TEntity record in records)
            {
                Delete<TEntity>(record);
            }
        }

        public int Count<TEntity>() where TEntity : class
        {
            return GetQuery<TEntity>().Count();
        }

        public int Count<TEntity>(Expression<Func<TEntity, bool>> predicate) where TEntity : class
        {
            return GetQuery<TEntity>(predicate).Count();
        }

        /*
        public void Update<TEntity>(TEntity entity) where TEntity : class
        {

        }
        */
    }
}
