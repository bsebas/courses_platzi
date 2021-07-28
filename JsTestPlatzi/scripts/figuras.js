const inputs = {
    cuadrado: {
        nav: document.querySelector(`.itemCuadrado`),
        card: document.querySelector(`.cuadrado`),
        input: document.querySelector("#inputCuadrado"),
        buttonPerimetro: document.querySelector("#perimetroCuadrado"),
        buttonArea: document.querySelector("#areaCuadrado"),
        active: false
    },
    triangulo: {
        nav: document.querySelector(`.itemTriangulo`),
        card: document.querySelector('.triangulo'),
        inputLado1: document.querySelector("#inputLado1Triangulo"),
        inputLado2: document.querySelector("#inputLado2Triangulo"),
        inputBase: document.querySelector("#inputBaseTriangulo"),
        buttonPerimetro: document.querySelector("#perimetroTriangulo"),
        buttonArea: document.querySelector("#areaTriangulo"),
        active: true
    },
    circulo: {
        nav: document.querySelector(`.itemCirculo`),
        card: document.querySelector(`.circulo`),
        input: document.querySelector("#inputCirculo"),
        buttonPerimetro: document.querySelector("#perimetroCirculo"),
        buttonArea: document.querySelector("#areaCirculo"),
        active: false
    }
}


inputs.cuadrado.nav.addEventListener('click', () => {
    if (inputs.cuadrado.active === false) {
        inputs.cuadrado.card.classList.remove('none');
        inputs.triangulo.card.classList.add('none');
        inputs.circulo.card.classList.add('none');
    }
})

inputs.circulo.nav.addEventListener('click', () => {
    if (inputs.triangulo.active === true) {
        inputs.cuadrado.card.classList.add('none');
        inputs.triangulo.card.classList.add('none');
        inputs.circulo.card.classList.remove('none');
    }
})

inputs.triangulo.nav.addEventListener('click', () => {
    if (inputs.triangulo.active === true) {
        inputs.cuadrado.card.classList.add('none');
        inputs.triangulo.card.classList.remove('none');
        inputs.circulo.card.classList.add('none');
    }
})


// ---------------------------------------------------------------------------------------------

// Cuadrado

const perimetroCuadrado = (lado) => {
    return lado * 4;
};

const areaCuadrado = (lado) => {
    return lado * lado;
}

// Triangulo

const perimetroTriangulo = (lado1, lado2, base) => {
    return lado1 + lado2 + base;
};


const areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
};

const alturaTriangulo = (lados, base) => { return Math.sqrt((lados ** 2) - (base ** 2 / 4)) }

// Circulo


const diametroCirculo = (radio) => {
    return radio * 2;
};

// Circuferencia

const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio)
    return diametro * Math.PI;
};

const areaCirculo = (radio) => {
    return (radio * radio) * Math.PI;
};

function createResult(card, result) {
    card.innerText = result;
}

inputs.cuadrado.buttonPerimetro.addEventListener('click', () => {
    if (inputs.cuadrado.input.value !== "") {
        createResult(document.querySelector(".resultCuadrado"), perimetroCuadrado(parseInt(inputs.cuadrado.input.value)))
    }
});
inputs.cuadrado.buttonArea.addEventListener('click', () => {
    if (inputs.cuadrado.input.value !== "") {
        createResult(document.querySelector(".resultCuadrado"), areaCuadrado(parseInt(inputs.cuadrado.input.value)))
    }
});


inputs.circulo.buttonPerimetro.addEventListener('click', () => {
    if (inputs.circulo.input.value !== "") {
        createResult(document.querySelector(".resultCirculo"), perimetroCirculo(parseInt(inputs.circulo.input.value)))
    }
});
inputs.circulo.buttonArea.addEventListener('click', () => {
    if (inputs.circulo.input.value !== "") {
        createResult(document.querySelector(".resultCirculo"), areaCirculo(parseInt(inputs.circulo.input.value)))
    }
});

inputs.triangulo.buttonPerimetro.addEventListener('click', () => {
    if (inputs.triangulo.inputLado1.value !== "" && inputs.triangulo.inputLado2.value !== "" && inputs.triangulo.inputBase.value !== "") {
        createResult(document.querySelector(".resultTriangle"), perimetroTriangulo(parseInt(inputs.triangulo.inputLado1.value), parseInt(inputs.triangulo.inputLado2.value), parseInt(inputs.triangulo.inputBase.value)))
    }
});
inputs.triangulo.buttonArea.addEventListener('click', () => {
    if (inputs.triangulo.inputLado1.value !== "" && inputs.triangulo.inputBase.value !== "") {
        createResult(document.querySelector(".resultTriangle"), areaTriangulo(parseInt(inputs.triangulo.inputBase.value), alturaTriangulo(parseInt(inputs.triangulo.inputBase.value), parseInt(inputs.triangulo.inputLado1.value))))
    }
});