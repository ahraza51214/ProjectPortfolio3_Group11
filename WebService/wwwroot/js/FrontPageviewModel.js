define(['knockout'], (ko) => {

    //let selectedComponent = ko.observable('login');

    //let changeContent = () => {
    //    if (selectedComponent() === "login") {
    //        selectedComponent('signup');
    //    } else {

    //        selectedComponent('login');
    //    }
    //}

  
    let showContent = ko.observable(false);

    
 


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
        isActive, showContent //userId, responseMessage, password, getUsers, User
    };
});