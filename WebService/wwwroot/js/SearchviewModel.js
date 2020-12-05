define(['knockout'], function (ko) {
    //private part


    this.mysearch = ko.observableArray(
        [{ searchInput: "Search", dateTime: "" }]);
 
    this.resultSearch = ko.observableArray(
        [{ search: "Search results will be shown here" }]);
 

    let SearchInput = ko.observable();

    let userId = ko.observable();
    let page = ko.observable();
    let pageSize = ko.observable();
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
       // fetch("api/search/" + userId() + "/" + SearchInput() + "?page=1&pageSize=10",
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
     
    
    //public part

    return {
        SearchInput,createSearch,getSearch,
        
        mysearch, userId, page, pageSize
       
    };
});