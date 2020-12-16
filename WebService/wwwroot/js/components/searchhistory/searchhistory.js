define(['knockout'], function (ko) {
    return function () {

        let userId = ko.observable(0);

        let mysearch = ko.observableArray(
            [{ storedInput: "", dateTime: "" }]);

        let getSearch = function () {
            fetch("api/search/" + userId())
                .then(function (response) {
                    if (response.status === 404) {
                        mysearch("");
                    }
                    return response.json();
                })
                .then(function (data) {
                    mysearch(data);
                });
        }
        
        return {
            getSearch,
            userId,
            mysearch
        };
    }
});