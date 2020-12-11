define(['knockout'], (ko) => {
    return function () {

       
        let selectedComponent = ko.observable('signup');

        let changeContent = () => {
            if (selectedComponent() === "signup") {
                selectedComponent('login');
            } else {

                selectedComponent('signup');
            }
        }
 

        return {
            selectedComponent,
            changeContent
        };
    }
});