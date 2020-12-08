using System.Collections.Generic;
using System.Linq;
using DataServiceLib.DBObjects;
using DataServiceLib.IDataService;

namespace DataServiceLib.DataService
{
    public class BookmarkingDataService : IBookmarkingDataService
    {
        private readonly Raw11Context _db;
        
        public BookmarkingDataService(string connStr)
        {
            _db = new Raw11Context(connStr);
        }

        public IList<BookmarkPerson> GetBookmarks(int userId)
        {
            return _db.BookmarkPerson.ToList();
        }

        public BookmarkPerson GetBookMark(int userId)
        {
            return _db.BookmarkPerson.FirstOrDefault(x => x.UserId==userId 
                                                          );
        }

        public bool CreateBookmark(BookmarkPerson bookmarkPerson)
        {
            var dbBook = GetBookMark(bookmarkPerson.UserId);
            if (dbBook == null)
            {
                _db.Add(bookmarkPerson);
                _db.SaveChanges();
                return true;
            }
            return false;
        }
        
        public bool DeleteBookmark(int userId)
        {
            var dbBook = GetBookMark(userId);
            if (dbBook == null)
            {
                return false;
            }
            _db.BookmarkPerson.Remove(dbBook);
            _db.SaveChanges();
            return true;
        }
    }
}