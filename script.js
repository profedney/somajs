// Função para calcular a soma de dois números
function soma(a, b) {
    return a + b;
}

// Função para ser chamada ao clicar no botão "Somar"
function somando() {
    // Obtém os valores dos campos de entrada
    var num1 = parseFloat(document.getElementById('n1').value);
    var num2 = parseFloat(document.getElementById('n2').value);
    
    // Calcula a soma usando a função 'soma'
    var resultado = soma(num1, num2);

    // Exibe o resultado na página HTML
    document.getElementById('result').innerHTML = 'Resultado da soma: ' + resultado;
}
