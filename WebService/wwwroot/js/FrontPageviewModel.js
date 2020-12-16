define(['knockout'], (ko) => {
    let currentComponent = ko.observable('login');
    let menuElements = ["Login", "Signup", "Bookmark", "Rating", "Search"];
    
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
        isActive, 
    };
});