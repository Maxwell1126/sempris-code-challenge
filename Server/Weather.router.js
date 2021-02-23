const express = require('express');
const router = express.Router();
const axios = require('axios');
const API_KEY = process.env.API_KEY;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=minneapolis&units=imperial&appid=${API_KEY}`;

router.get('/', (req, res) => {
    axios({
        method: 'GET',
        url: `${BASE_URL}`
    }).then((response) => {
        console.log(response.data);
        res.send(response.data);
    }).catch((error) => {
        console.log('Error in GET', error);
        res.sendStatus(500);
    });
});

module.exports = router;