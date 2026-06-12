const prompt = require('prompt-sync')()

const nota = parseFloat(prompt("Digite sua nota: "))
const faltas = parseFloat(prompt("digite sua frequencia de presença"))


if(nota >10){
    console.log("Nota somente entre 0 e 10")
}

else if(nota >= 7){
    if(faltas <= 75){
        console.log("Você passou com nota, MAS reprovou por faltas")
    }
    console.log("você esta aprovado !")
 }else {
    console.log("você foi reprovado")
 } 