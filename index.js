// 1.
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA); 
// Resposta: 91


// 2.
const pertenceFibonacci = (num) => {
    if (num < 0) return false; 

    let a = 0, b = 1;

    while (a <= num) {
        if (a === num) return true; 
        let temp = a + b;
        a = b;
        b = temp;
    }
    return false; 
}

const verficaFibonacci = (num) => {
    if (pertenceFibonacci(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
    }
}

verficaFibonacci(5)
verficaFibonacci(7)

//3.
const data = require('./data.json');
const listafaturamento = data.faturamento

const calculaFaturamento = (listafaturamento) => {
    const faturamentoFiltrado = listafaturamento.filter(valor => valor > 0);

    const menorFaturamento = Math.min(...faturamentoFiltrado);
    const maiorFaturamento = Math.max(...faturamentoFiltrado);

    const soma = faturamentoFiltrado.reduce((acc, valor) => acc + valor, 0);
    const media = soma / faturamentoFiltrado.length;

    const diasAcimaDaMedia = faturamentoFiltrado.filter(valor => valor > media).length;

    console.log(`O menor faturamento foi ${menorFaturamento}. O maior faturamento foi ${maiorFaturamento}. Dias com faturamento maior que a média: ${diasAcimaDaMedia}` )
}
calculaFaturamento(listafaturamento)

// 4.
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

let totalFaturamento = 0;
for (const estado in faturamentoPorEstado) {
    totalFaturamento += faturamentoPorEstado[estado];
}

for (const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}


// 5.
const inverterString = (str) => {
    let strInvertida = ""; 
    for (let i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i]; 
    }
    return strInvertida;
}

console.log(inverterString("teste da inversão"))