const {
    Router
} = require('express');

const WeatherController = require('./controllers/weatherController');

const routes = Router();

routes.get('/weather', WeatherController.index);
routes.post('/weather/:id', WeatherController.show); 

module.exports = routes;