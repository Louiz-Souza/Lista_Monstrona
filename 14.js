const numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
let resultado = 1;

for (let i = numero; i > 1; i--) {
    resultado *= i;
}

alert(`O fatorial de ${numero}! é ${resultado}`);