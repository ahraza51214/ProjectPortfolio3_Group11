define(['knockout'], function (ko) {
    //private part
    
    this.names = ko.observableArray(
        [{ language: "" , name:"" , username:"",age:0 }]);
   
    let userId = ko.observable();
    let name = ko.observable('');
    let age = ko.observable(0);
    let username = ko.observable();
    let language = ko.observable();
     
    let deleteUser = url => fetch("api/users/" + userId(), { method: "DELETE" });
     
    let createUsers = function (users, callback) {

            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            fetch("api/users", {
                method: "POST", body: JSON.stringify({ age:+age(),name:name(),username:username(),language:language() }) , headers
            })
                .then(response => response.json())
                .then(data => callback(data))
                ;
        }
     
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
        age, language, username, name,
        
        names, userId ,getUsers,
        deleteUser, createUsers
    };
});