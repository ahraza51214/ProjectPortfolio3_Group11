using System;
using System.Collections.Generic;
using AutoMapper;
using DataServiceLib;
using DataServiceLib.DBObjects;
using Microsoft.AspNetCore.Mvc;
using ProjectPortfolio2_Group11.Authentication.Attributes;
using ProjectPortfolio2_Group11.Model;


namespace ProjectPortfolio2_Group11.Controller
{
    [ApiController]
    [Route("api/bookmark")]
    public class BookmarkController : ControllerBase
    {
        private readonly DataServiceFacade _dataServiceFacade;
        private readonly IMapper _mapper;
        public BookmarkController(DataServiceFacade dataServiceFacade, IMapper mapper)
        {
            _dataServiceFacade = dataServiceFacade;
            _mapper = mapper;
        }

     /*   [Authorization]
        [HttpGet]
        public IActionResult GetBookmarks()
        {
            try
            {
                var user = Request.HttpContext.Items["User"] as UsersForAuth;
                var bookmarkPersons = _dataServiceFacade.BookmarkingDs.GetBookmarks(user.UserId);
                return Ok(_mapper.Map<IEnumerable<BookmarkPersonDto>>(bookmarkPersons));
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return Unauthorized();
            }
        } */

        [HttpGet("{userId}")]
        public IActionResult GetBookmark(int userId)
        {
            var response = " bookmark not found";
            var bookmark = _dataServiceFacade.BookmarkingDs.GetBookMark(userId);
            if (bookmark == null)
            {
                return NotFound(response);
            }
            return Ok(_mapper.Map<BookmarkPersonDto>(bookmark));
        }

        [HttpPost]
        public IActionResult CreateBookmark(BookmarkPersonForCreationDto bookmarkPersonForCreationDtoDto)
        {
            var response = "This bookmark already exists";
            var bookmark = _mapper.Map<BookmarkPerson>(bookmarkPersonForCreationDtoDto);
            if (!_dataServiceFacade.BookmarkingDs.CreateBookmark(bookmark))
            {
                return BadRequest(response);
            }
            return Created("", bookmark);
        }
        
        [HttpDelete("{userId}")]
        public IActionResult DeleteBookmark(int userId)
        {
            var response = " bookmark not found";
            if (!_dataServiceFacade.BookmarkingDs.DeleteBookmark(userId))
            {
                return NotFound(response);
            }
            response = " bookmark deleted";
            return CreatedAtRoute(null, userId + response);
        }
    }
}