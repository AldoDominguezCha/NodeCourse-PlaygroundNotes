const http = require('http')

url = 'http://api.weatherstack.com/current?access_key=06eae003dc62d993142f24c547a2b481&query=-34.9037065,-56.1935855'

const request = http.request(url, (response) => {

    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        data = JSON.parse(data)
        console.log(data.current)
    })
})


//Setting up an additional listener for error handling
request.on('error', (error) =>{
    console.log(error)
})

//Declare we are done setting up our request and it is ready to be fired off
request.end()