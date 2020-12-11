

require.config({
    baseUrl: "js",
    paths : {
        knockout: "lib/knockout/knockout-latest"
    }
});


require(['knockout', 'BookmarkviewModel', 'UserviewModel', 'SearchviewModel', 'RatingViewModel'], function (ko, bookmarkviewModel, userviewModel, searchviewModel, ratingViewModel) {
    var viewmodel = {
        bookmarkviewModel, userviewModel,searchviewModel, ratingViewModel
    }
   
    ko.applyBindings(viewmodel);

});




