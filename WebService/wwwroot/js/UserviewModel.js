define(['knockout'], function (ko) {
    //private part
    
    this.names = ko.observableArray(
        [{ language: "" , name:"" , username:"",age:"" }]);
   
    let userId = ko.observable();
    let name = ko.observable('');
    let age = ko.observable();
    let username = ko.observable();
    let language = ko.observable();
     
    let deleteUser = url => fetch("api/users/" + userId(), { method: "DELETE" });
     
    let createUsers = function () {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch("api/users", {
            method: "POST", body: JSON.stringify({ age: +age(), name: name(), username: username(), language: language() }), headers
        })
            .then(response => response.json());
    }
              
    let updateUsers = function () {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch("api/users/" + userId(), {
            method: "PUT", body: JSON.stringify({ age: +age(), name: name(), username: username(), language: language() }), headers
        })
            .then(response => response.json())
            ;
    }


    let getUsers = function () {
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
        age, language, username, name,
        
        names, userId ,getUsers,
        deleteUser, createUsers,updateUsers
    };
});