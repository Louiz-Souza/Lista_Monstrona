const quantidadeNotas = Number(prompt("Quantas notas você deseja inserir?"));
let somaTotal = 0;

for (let i = 1; i <= quantidadeNotas; i++) {
    let nota = Number(prompt(`Digite a nota nº ${i}:`));
    somaTotal += nota;
}

const mediaFinal = somaTotal / quantidadeNotas;
alert(`A média das ${quantidadeNotas} notas inseridas é: ${mediaFinal.toFixed(2)}`);