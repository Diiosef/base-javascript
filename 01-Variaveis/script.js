
        function Nome() {
            alert("Meu nome é Danilo");
        }
        function Idade() {
            alert("Minha idade é 27 anos");
        }
        function Altura() {
            alert("Minha altura é 1,75 metros");
        }
        function Peso() {
            alert("Meu peso é 70 quilos");
        }

 function pegarValores() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        return { num1, num2 };
    }   

    function mostraraResultado(valor) {
        document.getElementById("resultado").innerText = "Resultado: " + valor;
    }
    function somar() {
        let { num1, num2 } = pegarValores();
        mostraraResultado(num1 + num2);
    }
    function subtrair() {
        let { num1, num2 } = pegarValores();
        mostraraResultado(num1 - num2);
    }
    function multiplicar() {
        let { num1, num2 } = pegarValores();
        mostraraResultado(num1 * num2);
    }
    function dividir() {
        let { num1, num2 } = pegarValores();
        if (num2 !== 0) {
            mostraraResultado(num1 / num2);
        } else {
            mostraraResultado("Erro: Divisão por zero")
        }
    }