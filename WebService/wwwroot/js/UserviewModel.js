define(['knockout'], function (ko) {
    //private part
    
    let names = ko.observableArray(
    [{ username: "" }], [{ name: "" }]);

    let userId = ko.observable();
    let name = ko.observable('');
    let age = ko.observable(5);
    let username = ko.observable();
    let language = ko.observable();
     
    let deleteUser = url => fetch("api/users/" + userId(), { method: "DELETE" });
     
    let createUsers = function (users, callback) {

            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            fetch("api/users", {
                method: "POST", body: JSON.stringify({ age:+age() }) , headers
            })
                .then(response => response.json())
                .then(data => callback(data))
                ;
        }

     
          //  fetch("api/users", { method: "POST", body: JSON.stringify({ name: 'test', age: 5, username: 'Textualcontent', language: 'lolz' }), headers })
    // make computed observable for create and update
     
 
    
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