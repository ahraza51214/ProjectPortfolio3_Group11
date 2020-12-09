define(['knockout'], function (ko) {
    

   let  mysearch = ko.observableArray(
        [{ storedInput: "", dateTime: "" }]);
 
    resultSearch = ko.observableArray(
        [{ search:"PrimaryTitles",count:"" }]
    );
 
    let SearchInput = ko.observable();

    let userId = ko.observable(0);
    let page = ko.observable(0);
    let pageSize = ko.observable(50);
    let responseMessage = ko.observable();

    next= function () {
        page(page() + 1);
    }

    prev = function () {
        if (page() <1) {
            throw new Error("Page cannot be negative");
        }
        page(page() - 1);
    }

    let getSearch = function () {
        fetch("api/search/"+userId())

            .then(function (response) {

                if (response.status === 404) {
                    mysearch("");
                  
                }
                return response.json();
            })
            .then(function (data) {
                mysearch(data);
              
                } 
            );
    }
     
    let createSearch = function () {

            let headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch("api/search/" + userId()+"?page="+page()+"&pageSize="+pageSize(), {
            method: "POST", body: JSON.stringify({ userid: +userId(), searchInput: SearchInput() }) , headers
            })
            .then(function (response) {


                if (response.status === 404 ) {
                    responseMessage(" No search matches found!");
                    resultSearch("");
                    throw new Error(response.status + " No search matches found ");
                }
 
                    responseMessage("");
 

                return response.json();
            })
            .then(function (data ) {
             
                resultSearch(data);


            });
        
        }
     
     
    return {
        SearchInput,createSearch,getSearch,
        
        mysearch, userId, page, pageSize, next, prev, responseMessage
       
    };
});