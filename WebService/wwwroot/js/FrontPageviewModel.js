﻿define(['knockout'], (ko) => {

    let selectedComponent = ko.observable('login');

    let changeContent = () => {
        if (selectedComponent() === "login") {
            selectedComponent('signup');
        } else {

<<<<<<< Updated upstream
            selectedComponent('login');
        }
    }


=======
    //        selectedComponent('login');
    //    }
    //}

    let currentComponent = ko.observable('login');
    let menuElements = ["Login", "Signup", "Bookmark", "Rating"];
    let changeComponent = element => {
      
         
            currentComponent(element.toLowerCase());
        
    }

    let isActive = element => {
         
            return element.toLowerCase() === currentComponent() ? "active" : "";
        }
    
>>>>>>> Stashed changes

    return {
        selectedComponent,
        changeContent
    };
});