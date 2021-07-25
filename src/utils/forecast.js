const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=' +process.env.WEATHERAPI_KEY +'&q=' + latitude + ',' + longitude +'&aqi=yes'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find the location!', undefined)
        } else {
            callback(undefined, body.current.condition.text + '. It is currently ' + body.current.temp_c + ' degrees out. It feels like ' + body.current.feelslike_c + ' out. The humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast