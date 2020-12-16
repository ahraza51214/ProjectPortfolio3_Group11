define(['knockout'], (ko) => {

    

    let showContent = ko.observable(false);
 

    let currentComponent = ko.observable('login');
    let currentParams = ko.observable({ showContent: showContent });

 
 
    let menuElements = ["Login", "Signup", "Bookmark", "Rating"];
    let changeComponent = element => {

        currentComponent(element.toLowerCase());
    }

    let isActive = element => {
        return element.toLowerCase() === currentComponent() ? "active" : "";
    }


    return {
        
        currentComponent,
        menuElements,
        changeComponent,
        isActive, showContent, currentParams
    };
});