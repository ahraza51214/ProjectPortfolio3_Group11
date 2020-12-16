define(['knockout'], (ko) => {
    return function (params) {

        let showContent = params.showContent;
        
       
        let userId = ko.observable();

        let User = ko.observableArray(
            [{ language: "", name: "", username: "", age: "" }]);

     

       
       let responseMessage = ko.observable();
        let password = ko.observable();
 
        
     

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
      

       



        return {
          getUsers,userId, responseMessage, password, getUsers, User,showContent
        };
 
    } 
}); 