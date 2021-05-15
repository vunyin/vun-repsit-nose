const express = require('express')
const app = express()
const {readFileSync}  = require('fs');

app.listen(process.env.PORT || 5000, () => console.log("Server running..."))

app.get('/', (request, response) => {
    response.send("Hosting Successfully!");
})

app.get('/users', (request, response) => {
    let users = JSON.parse(readFileSync('users.json'));
    response.send(users);
});
// heroku