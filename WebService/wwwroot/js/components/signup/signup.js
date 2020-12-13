define(['knockout'], function (ko) {
    return function () {

     /*   let User = ko.observableArray(
            [{ language: "", name: "", username: "", age: "" }]); */

        let userId = ko.observable();
        let name = ko.observable();
        let age = ko.observable('');
        let username = ko.observable();
        let language = ko.observable();
        let password = ko.observable();
        let salt = ko.observable();
       
    


        /*let Userbool = () => UserState(true);
        let CancelState = () => UserState(false); */


        let deleteUser = url => fetch("api/users/" + userId(), { method: "DELETE" });

        let createUsers = function () {

            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            fetch("api/users", {
                method: "POST", body: JSON.stringify({ age: +age(), name: name(), username: username(), language: language(), password: password(), hash: salt() }), headers
            })

                .then(response => response.json()

                )


        }

        let updateUsers = function () {

            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            fetch("api/users/" + userId(), {
                method: "PUT", body: JSON.stringify({ age: +age(), name: name(), username: username(), language: language(), password: password(), hash: salt() }), headers
            })
                .then(response => response.json())


        }

 

        return {
<<<<<<< Updated upstream
            age, language, username, name,

            User, userId, getUsers,
            deleteUser, createUsers, updateUsers, password, salt, responseMessage
=======
            age,
            language,
            username,
            name,
            
            userId,
          
            deleteUser,
            createUsers,
            updateUsers,
            password,
            salt
           
            //selectedComponent,
            //changeContent
>>>>>>> Stashed changes
        };
    }
});