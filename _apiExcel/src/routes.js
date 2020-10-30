const {
    Router
} = require('express');

const ExcelController = require('./controller/excelController');

const routes = Router();

routes.get('/users', ExcelController.index);

module.exports = routes;