// JSON data
const users = [{
    id: 1,
    username: "admin",
    password: "admin",
},
{
    id: 2,
    username: "test",
    password: "test",
},
];

// Router
const router = app => {
app.get('/', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API'
    });
});

app.get('/users', (request, response) => {
    response.send(users);
});
}

// Export the router
module.exports = router;
