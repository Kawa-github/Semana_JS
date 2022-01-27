const products = [ // obj original
    { name: 'Mouse Sem Fio', price: 30 }, //item
    { name: 'Pen Drive', price: 25 }, // item
    { name: 'Cartucho de Tinta', price: 50 }, //item.....
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map(product => { // product é cada item do array 
    if(product.price >= 30){
        return {name: product.name, price: product.price / 2} //retornando um novo baseado no obj original objeto com as informações alteradas
    }

    return product
})

console.log('Objeto original:' , products )
console.log('novo Objeto:', saleProducts)