let nota = Number(prompt("Digite uma nota entre 0 e 10:"));

while (nota < 0 || nota > 10 || isNaN(nota)) {
    nota = Number(prompt("Valor inválido! Por favor, digite uma nota válida entre 0 e 10:"));
}

alert(`Nota válida registrada com sucesso: ${nota}`);