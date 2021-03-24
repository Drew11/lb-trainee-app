const data = require('./data');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/stats', function (req, res) {
    res.send(JSON.stringify(data));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});