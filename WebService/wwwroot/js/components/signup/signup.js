define(['knockout'], function (ko) {
    return function () {

        let User = ko.observableArray(
            [{ language: "", name: "", username: "", age: "" }]);

        let userId = ko.observable();
        let name = ko.observable();
        let age = ko.observable('');
        let username = ko.observable();
        let language = ko.observable();
        let password = ko.observable();
        let salt = ko.observable();
        let responseMessage = ko.observable();
    


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


        let getUsers = function () {
            fetch("api/users/" + userId() + "/"+ password())

                .then(function (response) {

                    if (response.status === 404 || response.status === 400) {
                        responseMessage("Invalid userId! Please type a valid userId!");
                        User("");
                        throw new Error(response.status + " User Not found ");
                    }
                    if (response.status === 200) {

                        responseMessage("User retrieved succesfully!");
                    }


                    return response.json();
                }

                )
                .then(function (data) {
                    User(data);

                });


        }

        //let selectedComponent = ko.observable('signup');

        //let changeContent = () => {
        //    if (selectedComponent() === "login") {
        //        selectedComponent('signup');
        //    } else {

        //        selectedComponent('signup');
        //    }
        //}



        return {
            age,
            language,
            username,
            name,
            User,
            userId,
            getUsers,
            deleteUser,
            createUsers,
            updateUsers,
            password,
            salt,
            responseMessage
            //selectedComponent,
            //changeContent
        };
    }
});