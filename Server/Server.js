const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const weatherRouter = require('./Weather.router');

app.use('/api/weather', weatherRouter);

app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});