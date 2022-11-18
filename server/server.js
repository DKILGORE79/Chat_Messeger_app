const express = require('express'); //Line 1
const sequelize = require('./config/connection');
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3


sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
});


// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
}); 