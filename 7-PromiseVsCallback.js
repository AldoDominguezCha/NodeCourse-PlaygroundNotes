const doWorkCallback = (callback) => {
    setTimeout(() =>{
        //THIS IS WHY WE NEED TO USE PROMISES INSTEAD OF CALLBACK PATTERN, THIS IS NOT GOOD
        callback('This is my error!', undefined)
        callback(undefined, 'Sucess!')
    }, 2000)
}

doWorkCallback((error, result) => {
    if(error) return console.log(`With callback: ${error}`)
    console.log(`With callback: ${result}`)
})

//Create a new promise and manually solving it with a positive outcome (resolve) or
//making it fail (reject) after two seconds
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        //The promise handles my mistake, it only solves the promess, doesn't reject it with
        //my bad code as well, because by the time the promess gets solved, it is done
        resolve({ value : 'Good data!' })
        reject({ error : 'Error!' })
    }, 2000)
})

//Setting the solve (then) and the reject (catch) functions for the promise 
doWorkPromise.then((result) => {
    console.log('Things went well with the promise', result)
}).catch((error) => {
    console.log('Things went wrong with the promise', error)
})

//The advantage of a promess is that you cannot resolve or reject it twice, while with the
//callback pattern, you can run the callback function multiple times, with an error and no result,
//with result and no error, with an error and no result again, and that doesn't make any sense
//PROMISES ADD AN EXTRA LAYER OF SECURITY FOR US TO MAKE FEWER MISTAKES
