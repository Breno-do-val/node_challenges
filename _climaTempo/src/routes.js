const {
    Router
} = require('express');

const WeatherController = require('./controllers/weatherController');

const routes = Router();

routes.get('/', WeatherController.index);
routes.get('/weather/:id', WeatherController.show); 

module.exports = routes;