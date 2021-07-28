const inputs = {
    price: document.querySelector('#inputPrice'),
    discount: document.querySelector('#inputDiscount'),
    calculate: document.querySelector('#calculate')
}

inputs.calculate.addEventListener('click', () => {
    const resultDOM = document.querySelector('.result');
    resultDOM.textContent = caculatePrecio(inputs.price.value, inputs.discount.value)
})

function caculatePrecio(precio, descuento) {
    return (precio * (100 - descuento)) / 100
}