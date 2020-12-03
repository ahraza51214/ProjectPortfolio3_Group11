define(['knockout'], function (ko) {
    //private part

    let bookmarks = ko.observableArray(
        [{ nconst: "" }], [{ userid: "" }]);

    let nconst = ko.observable();
    let userid = ko.observable('');
   

let DeleteBookmark = url => fetch("api/bookmarkpersons/" + userid(), { method: "DELETE" });

let createBookmark = function (bookmarkpersons, callback) {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch("api/bookmarkpersons", {
        method: "POST", body: JSON.stringify({ nconst: +nconst() }), headers
        })
            .then(response => response.json())
            .then(data => callback(data))
            ;
    }


    let prevButtib = function () {

        console.log("ddd");

    }

 

 let GetBookmarks = function (bookmarkpersons, callback) {
     fetch("api/bookmarkpersons/" + userid())


            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                bookmarks(data);
            });
    }





    //public part


    return {
        nconst, userid,

        bookmarks, GetBookmarks, prevButtib,
        DeleteBookmark, createBookmark
    };
});