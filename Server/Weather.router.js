const express = require('express');
const router = express.Router();
const axios = require('axios');
const API_KEY = process.env.API_KEY;
const city_name = 'Minneapolis'
const BASE_URL = `api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;



module.exports = router;