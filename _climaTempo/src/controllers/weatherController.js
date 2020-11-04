const {
    readFile
} = require('fs');

const {
    promisify
} = require('util')

const {
    requestLocales,
    requestWeather
 } = require('../services/consumer');

module.exports = {
    index: async (req, res) => {
        const result = await requestLocales();

        res.render('index', {
            cities: result
        })

    },

    show: async (req, res) => {

        res.render('searched');
        console.log(result);
    }
}