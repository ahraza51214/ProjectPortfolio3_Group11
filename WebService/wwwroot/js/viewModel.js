define(['knockout'], function (ko) {
    //private part
   
    let names = ko.observableArray(
        [{ name: "" }]);
    let firstName = ko.observable("");
     
    let fullName = ko.computed(function() {
        return firstName();
    });
     
    let deleteUser = url => fetch("api/users/5", { method: "DELETE" });

    //deleteUser("api/users/5");

    let createUsers = function (users, callback) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch("api/users", { method: "POST", body: JSON.stringify(users), headers })
            .then(response => response.json())
            .then(data => callback(data));
    }

  

    let clickButton = function() {
        names.push({ name: fullName() });
        }
     
    
    fetch("api/users/2")
   
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            names(data);
        });


    //public part
    return {
        firstName,
        clickButton,
        names,
        deleteUser, createUsers
    };
});