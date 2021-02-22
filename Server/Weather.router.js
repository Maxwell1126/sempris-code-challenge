const express = require('express');
const router = express.Router();
const axios = require('axios');
const API_KEY = process.env.API_KEY;
const city_name = 'Minneapolis'
const state_code = 'MN';
const BASE_URL = `api.openweathermap.org/data/2.5/weather?q=${city_name},${state_code}&appid=${API_KEY}`;

router.get('/', (req, res) => {
    axios({
        method: 'GET',
        url: `${BASE_URL}`
    }).then((response) => {
        console.log(response);
        res.send(response.data.data);
    }).catch((error) => {
        console.log('Error in GET', error);
        res.sendStatus(500);
    });
});

module.exports = router;