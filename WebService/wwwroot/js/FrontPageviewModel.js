define(['knockout'], (ko) => {
    let currentComponent = ko.observable('login');
    let menuElements = ["Login", "EditUser", "Bookmark", "Rating", "SearchHistory"];
    let showContent = ko.observable(false);
    let currentParams = ko.observable({showContent: showContent});
    
    let changeComponent = element => {
        currentComponent(element.toLowerCase());
    }

    let isActive = element => {
        return element.toLowerCase() === currentComponent() ? "active" : "";
    }
    
    return {
        currentComponent,
        menuElements,
        showContent,
        currentParams,
        changeComponent,
        isActive, 
    };
});
