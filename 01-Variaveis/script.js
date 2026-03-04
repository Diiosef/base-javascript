let nome = "Danilo"
let Idade = 27
let Altura = 1.75
let Peso = 70

function somar(a, b) {
    return a + b;
}

console.log( somar(10, 20) )

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
console.log(calcularIMC(70, 1.75))

function CELSIUS_TO_FAHRENHEIT(celsius) {CELSIUS_TO_FAHRENHEIT
    return (celsius * 9.5) + 32;
}
console.log(CELSIUS_TO_FAHRENHEIT(25))