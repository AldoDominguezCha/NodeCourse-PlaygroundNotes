const fs = require('fs')
/* const book = {
    title : "Les Miserables",
    author : "Victor Hugo"
}

console.log(`Before stringifying, data type is: ${typeof(book)}.`)
const bookJSON = JSON.stringify(book)
console.log(`After stringifying, data type is: ${typeof(bookJSON)}.`)
console.log(bookJSON)

const parsedData = JSON.parse(bookJSON)
console.log(`The author of the book is ${parsedData.author}.`)

fs.writeFileSync('1-json.json', bookJSON, {'flag':'w'}) */

/* const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.title) */


const dataBuffer = fs.readFileSync('1-json.json')
const dataString = dataBuffer.toString()

const data = JSON.parse(dataString)
data.name = "Aldo Dominguez"
data.age = 25

const dataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataJSON, {'flag':'w'})