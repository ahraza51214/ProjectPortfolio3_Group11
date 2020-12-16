define(['knockout', 'dataService',], (ko,ds) => {
    return function () {

        let User = ko.observableArray(
            [{ language: "", name: "", username: "", age: "" }]);
        let responseMessage = ko.observable();
        let password = ko.observable();
        let userId = ko.observable();
        let showContent = ko.observable(false);
     
        let getUsers = function () {

           
                ds.getUsers(response => {
                    userId(response.userId);
                    password(response.password);
                   
                }, userId(), password())
            };
        
        return {
         getUsers,userId, responseMessage, password, getUsers, User, showContent 
        };
 
    } 
}); 