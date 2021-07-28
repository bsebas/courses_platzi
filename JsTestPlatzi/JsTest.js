const typeSuscripciones = ["Free", "Basic", "Expert"]
const messageSuscipciones = ["Solo puedes tomar los cursos gratis",
    "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Puedes tomar casi todos los cursos de Platzi durante un año"
];

let userSuscripcion = "Free";

function validarSuscripcion() {
    for (let i = 0; i < typeSuscripciones.length; i++) {
        if (typeSuscripciones[i] === userSuscripcion) {
            console.log(messageSuscipciones[i])
        }
    }
}

validarSuscripcion()