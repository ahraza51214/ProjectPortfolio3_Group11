define(['knockout'], function (ko) {
    
    let ratings = ko.observableArray(
        [{ tConst: "", userId: "", TitleIndividRating: "" }]);

    let tconst = ko.observable();
    let userId = ko.observable("");
    let titleIndividRating = ko.observable("");
    let responseMessage = ko.observable();

    let createRating = function () {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch("api/rating", {
            method: "POST", body: JSON.stringify({ tConst: tconst(), userId: userId(), TitleIndividRating: titleIndividRating()}), headers
        })
            .then(response => response.json())
    }


    let getRating = function () {
        fetch("api/rating/" + userId())
            
            .then(function (response) {

                    if (response.status === 404 || response.status === 400) {
                        responseMessage("Invalid request! Please type a valid userId!");
                        ratings("");
                        throw new Error(response.status + " Rating Not found ");
                    }
                    if (response.status === 200) {

                        responseMessage("Rating retrieved succesfully!");
                    }
                    
                    return response.json();
                }

            )
            .then(function (data) {
                ratings(data);
            });
    }
    
    return {
        tconst, userId, titleIndividRating,

        ratings, getRating, responseMessage,
        createRating
    };
});