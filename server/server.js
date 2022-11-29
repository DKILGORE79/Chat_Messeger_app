const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
});


// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.use(routes);