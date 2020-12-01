define(['knockout'], function (ko) {
    //private part
   
    let names = ko.observableArray(
        [{ name: "" }]);
    let firstName = ko.observable("");
     
    let fullName = ko.computed(function() {
        return firstName();
    });
     
    let deleteUser = url => fetch("api/users/4", {
        method: "DELETE"
    });

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
        deleteUser
    };
});