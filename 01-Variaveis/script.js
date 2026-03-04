function exibirNome() {
    alert("Seu nome");
}

function exibirProfissao() {
    alert("Sua profissão");
}

function exibirAnosEstudo() {
    alert("Tenho X anos de estudo");
}

function apresentar() {
    alert("Olá, meu nome é Danilo, estudo programação há X anos e gosto de JS");
}

function calcularIMC() {
    var peso = parseFloat(document.getElementById('number1').value);
    var altura = parseFloat(document.getElementById('number2').value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById('resultado').textContent =
        'Por favor, insira valores válidos para peso e altura.';
        return;
    }

    var imc = peso / (altura * altura);
    document.getElementById('resultado').textContent =
    'Seu IMC é: ' + imc.toFixed(2);
}