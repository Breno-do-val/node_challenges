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
        const result = await requestLocales()
        .then(data => {
            res.render('index', {
                cities: data
            });
        })
        .catch(error => {
            console.log(error)
        });

    },

    show: async (req, res) => {
        let filteredCity = null;
        const cityId = req.params.id;
        const result = await requestWeather()
            .then((result) => {
                filteredCity = result.filter(element => {
                    if (element.locale.id == cityId) {
                        return element;
                    }
                })
                res.render('weather', {
                    results: filteredCity,
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
}