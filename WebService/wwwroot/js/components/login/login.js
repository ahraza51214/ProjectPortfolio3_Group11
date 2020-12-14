define(['knockout'], (ko) => {
    return function () {

        let User = ko.observableArray(
            [{ language: "", name: "", username: "", age: "" }]);

        //let selectedComponent = ko.observable('login');

        //let changeContent = () => {
        //    if (selectedComponent() === "login") {
        //        selectedComponent('signup');
        //    } else {

        //        selectedComponent('login');
        //    }
        //}
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


       



        return {userId,responseMessage,password,getUsers,User,showContent
            //selectedComponent,
            //changeContent
        };
 
    }
});