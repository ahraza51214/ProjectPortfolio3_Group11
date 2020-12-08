define(['knockout'], function (ko) {
    //private part

    this.bookmarks = ko.observableArray(
        [{ nConst: "", userId: "" }]);

    let nconst = ko.observable();
    let userId = ko.observable();





    let deleteBookmark = url => fetch("api/bookmark/" + userId() ,{ method: "DELETE" });






    let createBookmark = function () {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch("api/bookmark", {
            method: "POST", body: JSON.stringify({ nConst: nconst(), userId: +userId() }), headers
        })
            .then(response => response.json())



    }


        let getBookmarks = function () {
            fetch("api/bookmark/" + userId())


                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    bookmarks(data);


                });
        }

    




return {
    nconst, userId,

    bookmarks, getBookmarks,
        deleteBookmark, createBookmark


        };
    });