define(['knockout'], function (ko) {
    

    this.mysearch = ko.observableArray(
        [{ storedInput: "Search", dateTime: "" }]);
 
    this.resultSearch = ko.observableArray(
        [{ search: "Search results will be shown here" }]);
 

    let SearchInput = ko.observable();

    let userId = ko.observable(1);
    let page = ko.observable(0);
    let pageSize = ko.observable(50);
 

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
                return response.json();
            })
            .then(function (data) {
                mysearch(data);
            });
    }
     
    let createSearch = function () {

            let headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch("api/search/" + userId()+"?page="+page()+"&pageSize="+pageSize(), {
            method: "POST", body: JSON.stringify({ userid: +userId(), searchInput: SearchInput() }) , headers
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (data ) {
               resultSearch(data);
                
            });
        
        }
     
     
    return {
        SearchInput,createSearch,getSearch,
        
        mysearch, userId, page, pageSize,next,prev
       
    };
});