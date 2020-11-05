const path = require('path');

const {
    readFile
} = require('fs');

const {
    promisify, callbackify
} = require('util')

const readFileAsync  = promisify(readFile);

exports.requestLocales = async function() {
    try {
        const result = await readFileAsync(path.join(__dirname, '../base/locales.json'));
        const parsedResult = JSON.parse(result.toString());
        return parsedResult;
    } 
    catch (error) {
        console.error(`Error: ${error}`);
    }
}

exports.requestWeather = async function() {
    try {
        const result = await readFileAsync(path.join(__dirname, '../base/weather.json'));
        const parsedResult = JSON.parse(result.toString());
        return parsedResult;
    } 
    catch (error) {
        console.error(`Error: ${error}`);
    }
}