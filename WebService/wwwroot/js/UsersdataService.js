
console.log("Before fetch");

let getUsers = function(callback) {
    fetch("api/users/1") // fetch returns a promise object, that uses a then method
        .then(function(response) {
            return response.json(); // returns the body of the json
        })
        .then(function(data) {
            callback(data);
        });
};

let createUsers = function (users, callback) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("api/users/5", { method: "POST", body: JSON.stringify(users), headers })
        .then(response => response.json())
        .then(data => callback(data));
}

let deleteUsers = url => fetch(url, {
    method: "DELETE"
});


//deleteUsers("api/users/2");

console.log("After fetch");


