
console.log("Before fetch");

/*
let getUsers = function(callback) {
    fetch("api/users/1") // fetch returns a promise object, that uses a then method
        .then(function(response) {
            return response.json(); // returns the body of the json
        })
        .then(function(data) {
            callback(data);
        });
};
/*



getUsers = (function (data) {
    console.log(data);
});

createUsers({ userid: 4, name: 'ksfjsalkdjakdl', age:5, username:'wfo', language:'oweig' },
    function(data) {
        console.log(data);
    });

*/

console.log("After fetch");


