function mostrarNome() {
    alert("Meu nome é Danilo");
}

function mostrarAltura() {
    alert("Minha altura é 1,75 metros");
}

function calcularIMC() {

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const imc = peso / (altura * altura);

    document.getElementById('resultado').innerText =
        "Seu IMC é: " + imc.toFixed(2);

        if (imc < 18.5) {
            alert("Você está abaixo do peso.");
        }
        else if (imc <25) {
            alert("Você está com peso normal.");
        }
        else if (imc <30) {
            alert("Você está com sobrepeso.");
        }
        else {
            alert("Você está com obesidade.");
        }
}