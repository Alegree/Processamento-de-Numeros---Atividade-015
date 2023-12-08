function gerarNaturais(n) {
    let naturais = [];
    for (let i = 1; i <= n; i++) {
        naturais.push(i);
    }
    return naturais;
}

function gerarPares(n) {
    let pares = [];
    for (let i = 2; i <= n * 2; i += 2) {
        pares.push(i);
    }
    return pares;
}

function gerarImpares(n) {
    let impares = [];
    for (let i = 1; i <= n * 2; i += 2) {
        impares.push(i);
    }
    return impares;
}

function gerarMultiplos3(n) {
    let multiplos3 = [];
    for (let i = 1; multiplos3.length < n; i++) {
        if (i % 3 === 0) {
            multiplos3.push(i);
        }
    }
    return multiplos3;
}

function encontrarDivisores(numero) {
    let divisores = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

function calcularFatorial() {
    const inputElement = document.getElementById('fatorialInput');
    const resultadoElement = document.getElementById('resultadoFatorial');

    const numero = parseInt(inputElement.value);

    if (!isNaN(numero)) {
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        resultadoElement.innerHTML = `O fatorial de ${numero} é ${fatorial}`;
    } else {
        resultadoElement.innerHTML = 'Por favor, insira um número válido.';
    }
}

function testarDesempenho() {
    const tamanhos = [10, 100, 1000, 10000, 100000, 1000000];

    for (let i = 0; i < tamanhos.length; i++) {
        const tamanho = tamanhos[i];

        const start = performance.now();

        gerarNaturais(tamanho);
        gerarPares(tamanho);
        gerarImpares(tamanho);
        gerarMultiplos3(tamanho);
        encontrarDivisores(12);

        const end = performance.now();
        const tempo = end - start;

        Swal.fire({
            title: `Números processados: ${tamanho}`,
            text: `Tempo de processamento: ${tempo.toFixed(2)} ms`,
            showConfirmButton: false,
            timer: 3000
        });
    }
}

testarDesempenho();

$('#naturais').text(`Naturais: ${gerarNaturais(10).join(', ')}`);
$('#pares').text(`Pares: ${gerarPares(10).join(', ')}`);
$('#impares').text(`Ímpares: ${gerarImpares(10).join(', ')}`);
$('#multiplos3').text(`Múltiplos de 3: ${gerarMultiplos3(10).join(', ')}`);
$('#divisores12').text(`Divisores de 12: ${encontrarDivisores(12).join(', ')}`);
