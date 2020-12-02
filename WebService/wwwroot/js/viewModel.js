define(['knockout'], function (ko) {
    //private part

    let names = ko.observableArray(
        [{ username: "" }], [{ name: "" }]);

    let userId = ko.observable();
     
    let deleteUser = url => fetch("api/users/" + userId() , { method: "DELETE" });

    let createUsers = function (users, callback) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch("api/users", { method: "POST", body: JSON.stringify(users), headers })
            .then(response => response.json())
            .then(data => callback(data));
    }
    // make computed observable for create and update

   /* createUsers({ userid: 0, name: 'ksfjsalkdjakdl', age: 5, username: 'wfo', language: 'oweig' },
        function (data) {
            console.log(data);
        }); 
    */
      
    let getUsers = function (users, callback) {
        fetch("api/users/"+userId())
        //fetch("api/users/+UserInput) observable knockout binding array something.

            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                names(data);
            });
    }


    //public part
    return {
         
        
        names, userId ,getUsers,
        deleteUser, createUsers
    };
});