
const names = ['Aldo', 'Foo', 'Bar', 'Julio', 'Poh']
const shortNames = names.filter((name) => name.length <= 3)



const geocode = (address, callback) => {
    setTimeout(() => {

        const data = {
            latitude : Math.random()*100,
            longitude : Math.random()*100 
        }

        callback(data)

    }, 2000)

}

geocode('Test', (coordinates) => {
    console.log(coordinates)
})


const add = (a, b, callback) => {
    setTimeout(() => {
        sum = a + b
        callback(sum)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})