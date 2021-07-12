const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a5b5c2ab8e68bee5005daa5c2f871bda&query=' + longitude + ',' + latitude + '&units=f'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress.')
            //console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + ' degress.')
        }
    })
}


module.exports = forecast