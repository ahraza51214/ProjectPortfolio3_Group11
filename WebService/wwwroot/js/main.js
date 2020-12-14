require.config({
    baseUrl: "js",
    paths: {
        knockout: "lib/knockout/knockout-latest",
        text: "lib/require-text/text.min",
         dataService: "dataService"
    }
});

require(['knockout', 'text'], (ko) => {
    ko.components.register("fp", {
        viewModel: { require: "components/fp/fp" },
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

require(['knockout', 'text'], (ko) => {
    ko.components.register("search", {
        viewModel: { require: "components/search/search" },
        template: { require: "text!components/search/search.html" }
    });
});

require(['knockout', 'text'], (ko) => {
    ko.components.register("bookmark", {
        viewModel: { require: "components/bookmark/bookmark" },
        template: { require: "text!components/bookmark/bookmark.html" }
    });
});

require(['knockout', 'text'], (ko) => {
    ko.components.register("rating", {
        viewModel: { require: "components/rating/rating" },
        template: { require: "text!components/rating/rating.html" }
    });
});


require(['knockout', 'FrontPageviewModel'], function (ko, fpvm) {

    ko.applyBindings(fpvm);

});