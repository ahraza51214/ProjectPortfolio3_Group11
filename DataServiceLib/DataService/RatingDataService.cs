using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using DataServiceLib.DBObjects;
using DataServiceLib.IDataService;
using Microsoft.EntityFrameworkCore;

namespace DataServiceLib.DataService
{
    public class RatingDataService : IRatingDataService
    {
        private readonly Raw11Context _db;

        public RatingDataService(string connStr)
        {
            _db = new Raw11Context(connStr);
        }

        public IList<UserTitleRate> GetRating( int userId)
        {
            return _db.UserTitleRates.Where(x => x.UserId == userId).ToList();
        }

        public IList<TitleRateDto> CreateRating(UserTitleRate userTitleRate)
        {

            var queery = _db.RatingTable.FromSqlInterpolated($"select * from rate({userTitleRate.UserId},{userTitleRate.TConst},{userTitleRate.TitleIndividRating})");

            //_db.SaveChanges();

            return queery
                .ToList();
        }
    
    }
}