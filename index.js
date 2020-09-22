const express = require('express');
const path = require('path');
// const db = require("./models");


const app = express();
const routes = require('./routes');

const bodyParser = require('body-parser');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(routes);
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
// db.sequelize.sync().then(function () {
    app.listen(port);
    console.log(`Server listening on ${port}`);
// }); 