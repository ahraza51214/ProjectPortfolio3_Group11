

require.config({
    baseUrl: "js",
    paths : {
        knockout: "lib/knockout/knockout-latest"
    }
});


require(['knockout', 'BookmarkviewModel', 'UserviewModel', 'SearchviewModel'], function (ko, bookmarkviewModel, userviewModel, searchviewModel) {
    var viewmodel = {
        bookmarkviewModel, userviewModel,searchviewModel
    }
   
    ko.applyBindings(viewmodel);

});




