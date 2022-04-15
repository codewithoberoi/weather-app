const request = require("request")


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b176d26eae4a1c7113b011434472fda6&query=' + latitude + ',' + longitude
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service.')
        } else if(body.error) {
            callback('Unable to find the location.')
        } else {
                location = body.location.name
                temperature = body.current.temperature
                rainPercent = body.current.precip
                description = body.current.weather_descriptions[0]
                callback(undefined, description + '. The temperature in ' + location + ' is ' + temperature + ' degrees.' + ' There is a ' + rainPercent +'% chance of rain.')
        }
    })
}

module.exports = forecast