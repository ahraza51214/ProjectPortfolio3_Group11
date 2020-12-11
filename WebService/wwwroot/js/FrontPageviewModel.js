define(['knockout'], (ko) => {

    let selectedComponent = ko.observable('login');

    let changeContent = () => {
        if (selectedComponent() === "login") {
            selectedComponent('signup');
        } else {

            selectedComponent('login');
        }
    }



    return {
        selectedComponent,
        changeContent
    };
});