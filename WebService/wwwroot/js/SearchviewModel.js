﻿define(['knockout'], function (ko) {
    //private part


    this.mysearch = ko.observableArray(
        [{ searchInput: "Search", dateTime: "" }]);
    // something let kig på Henriks kode, først lave let search = ko.observable() så i createsearch skrive .then (function(data) search(data)

    this.resultSearch = ko.observableArray(
        [{ search: "Search results will be shown here", prev:"", next:"", current:"" }]);
 

    let SearchInput = ko.observable();

    let userId = ko.observable();
   
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
        fetch("api/search/" + userId()+"?page=1&pageSize=10", {
            method: "POST", body: JSON.stringify({ userid: +userId(), searchInput: SearchInput() }) , headers
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (data ) {
               resultSearch(data);
                
            });
        
                ;
        }
     
    
    //public part

    return {
        SearchInput,createSearch,getSearch,
        
        mysearch, userId
       
    };
});