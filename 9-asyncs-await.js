//async-await practice! To use instead of promise chaining, because that type of code gets
//messy when chaining a lot of promises together, async-await is a great solution, it makes
//asynchronous code look mire like standar synchronous code.


//Creating a function that returns a promise, after two seconds pass, we have acess to the sum of the two
//numbers by solving the promise if both are positive, if one of them is negative, we reject the
//promise passing a string as our error
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0)
                return reject('Numbers must be non-negative')
            resolve(a+b)
        }, 2000)
    })
}


/* We want to make multiple calls to the add function without having to chain the promises we get back,
we can use the async/await syntax to make the code more readable and structured, we are calling 
add 3 different times inside the function that has been specified as asynchronous with the 
keyword 'async', this allows us to use the keyword 'await' to "wait" for the current promise
to hopefully get resolved and store the resolving argument (the sum) inside a constant,
if the code inside the function successfully reaches the return statement the 'doWork'
function would be resolving its promise, executing the callback function that was appended
to it with .then(), if any of the promises (calls to add) inside the big 'doWork' promise   
gets rejected, the whole 'doWork' promise is considered as rejected itself and the 
reject function appended to the big promise returned by 'doWork' with .catch() gets executed*/

const doWork = async () => {
    const sum = await add(1,-99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, -3)
    return sum3
}

doWork().then((result) =>  {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})