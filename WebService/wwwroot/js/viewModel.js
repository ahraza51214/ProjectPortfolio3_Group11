define(['knockout'], function (ko) {
    //private part

    let names = ko.observableArray(
    [{ username: "" }], [{ name: "" }]);

    let userId = ko.observable();
    //let name = ko.observable();
  
    let deleteUser = url => fetch("api/users/" + userId() , { method: "DELETE" });

    let createUsers = function (users, callback) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch("api/users", {
            method: "POST", body: jsonData, headers })
            .then(response => response.json())
            .then(data => callback(data));

    }       //  fetch("api/users", { method: "POST", body: JSON.stringify({ name: 'test', age: 5, username: 'Textualcontent', language: 'lolz' }), headers })
    // make computed observable for create and update
     let userModel = {
      
        name: ko.observable(),
        age: ko.observable(656),
        username: ko.observable("lol"),
        language: ko.observable() }; 

     let jsonData = ko.toJS(userModel);
    
    let getUsers = function (users, callback) {
        fetch("api/users/"+userId())
  

            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                names(data);
            });
    }


    //public part
    return {  
        jsonData,
        names, userId ,getUsers,
        deleteUser, createUsers
    };
});