

require.config({
    baseUrl: "js",
    paths : {
        knockout: "lib/knockout/knockout-latest"
    }
});





require(['knockout', 'BookmarkviewModel', 'UserviewModel'], function (ko, bookmarkviewModel, userviewModel) {
    var viewmodel = {
        bookmarkviewModel, userviewModel
    }
   
    ko.applyBindings(viewmodel);

});




