define(['knockout'], (ko) => {

    //let selectedComponent = ko.observable('login');

    //let changeContent = () => {
    //    if (selectedComponent() === "login") {
    //        selectedComponent('signup');
    //    } else {

    //        selectedComponent('login');
    //    }
    //}

    let User = ko.observableArray(
        [{ language: "", name: "", username: "", age: "" }]);

     let responseMessage = ko.observable();
    let password = ko.observable();
    let userId = ko.observable(); 
    let showContent = ko.observable(false);

    let getUsers = function () {
        fetch("api/users/" + userId() + "/" + password())

            .then(function (response) {

                if (response.status === 404 || response.status === 400) {
                    responseMessage("Invalid userId or Password! Please type  valid credentials!");
                    User("");
                    throw new Error(response.status + " Authentication failed ");

                }
                if (response.status === 200) {
                    showContent(true);

                    responseMessage("Login succesful!");
                }

                return response.json();
            }

            )
            .then(function (data) {
                User(data);

            });


    }
 


    let currentComponent = ko.observable('login');
    let menuElements = ["Login", "Signup", "Bookmark", "Rating"];
    let changeComponent = element => {

        currentComponent(element.toLowerCase());
    }

    let isActive = element => {
        return element.toLowerCase() === currentComponent() ? "active" : "";
    }


    return {
        //selectedComponent,
        //changeContent,
        currentComponent,
        menuElements,
        changeComponent,
        isActive, showContent, userId, responseMessage, password, getUsers, User
    };
});