

require.config({
    baseUrl: "js",
    paths : {
        knockout: "lib/knockout/knockout-latest",
        text: "lib/require-text/text.min"
    }
});

require(['knockout', 'text'], (ko) => {
    ko.components.register("fp", {
        viewModel: { require: "components/fp/fp"},
        template: { require: "text!components/fp/fp.html" }
    });    
});

require(['knockout', 'text'], (ko) => {
    ko.components.register("login", {
        viewModel: { require: "components/login/login" },
        template: { require: "text!components/login/login.html" }
    });
});

require(['knockout', 'text'], (ko) => {
    ko.components.register("signup", {
        viewModel: { require: "components/signup/signup" },
        template: { require: "text!components/signup/signup.html" }
    });
});



require(['knockout', 'BookmarkviewModel', 'UserviewModel', 'SearchviewModel', 'FrontPageviewModel'], function (ko, bookmarkviewModel, userviewModel, searchviewModel, FrontPageviewModel) {
    var viewmodel = {
        bookmarkviewModel, userviewModel, searchviewModel, FrontPageviewModel
    }
   
    ko.applyBindings(viewmodel);

});




