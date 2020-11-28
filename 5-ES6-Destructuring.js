const product = {
    label : 'Red notebook',
    price : 3,
    stock : 201,
    salePrice : undefined
} 


const {label : productLabel, price, stock} = product

console.log(`The product's label is: ${productLabel}.`)
console.log(`The product's price is: ${price}.`)
console.log(`The prodcut's stock is: ${stock}.`)

const transaction = (type, {productLabel : product, price, notIncluded = 3} = myProduct) => {
    console.log(`Transaction type: ${type}.`)
    console.log(`Label: ${productLabel}.`)
    console.log(`Price: ${price}.`)
    console.log(`Not Included in product: ${notIncluded}.`)

}

transaction('order', product)