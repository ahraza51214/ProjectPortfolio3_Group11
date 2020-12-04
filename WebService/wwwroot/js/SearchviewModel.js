define(['knockout'], function (ko) {
    //private part

 
    // strings perhaps 

    this.mysearch = ko.observableArray(
        [{ userId: 0, searchInput: "Search"}]);

    let SearchInput = ko.observable();

    let userId = ko.observable();
   
    let getSearch = function (search, callback) {
        fetch("api/search/"+userId())

            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                mysearch(data);
            });
    }
    let deleteSearch = url => fetch("api/search/" + userId(), { method: "DELETE" });

    

    let createSearch = function (search, callback) {

            let headers = new Headers();
            headers.append("Content-Type", "application/json");
        fetch("api/search/" +userId(), {
            method: "POST", body: JSON.stringify({ userid: +userId(), Strings: SearchInput() }) , headers
            })
                .then(response => response.json())
                .then(data => callback(data))
                ;
        }
     
    
    //public part

    return {
        deleteSearch,SearchInput,createSearch,getSearch,
        
        mysearch, userId
       
    };
});