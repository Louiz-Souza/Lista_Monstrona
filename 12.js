const prompt = require (`prompt-sync`)()

let pares = ("Digite um número Par para um limite: ")


for (let i = 0; i <= limite; i++) {
    if (i % 2 === 0) {
        pares += i + " ";
    }
}

alert(pares);



