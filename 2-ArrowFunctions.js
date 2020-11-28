const square = function(x){
    return x**2
}

const squareV2 = (x) => {
    return x**2
}

const squareV3 = (x) => x**2 

const obj1 = {
    name : "Aldo's birthday party!",
    guestList : ['Aldo', 'Jesus', 'Oswaldo'],
    printPresentationRegular : function(){
        console.log(`Welcome to ${this.name}`)
    },
    printPresentationArrow : () => {
        console.log(`Welcome to ${this.name}`)
    },
    printPresentationShort(){
        console.log(`Welcome to ${this.name}`)
        this.guestList.forEach((guest, index, guests)=>{
            console.log(`${guest} is attending ${this.name}.`)
        })
    }
}

obj1.printPresentationArrow ()
