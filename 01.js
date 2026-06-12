const prompt =require('prompt-sync')()

let nota = parseFloat(prompt(" Por favor Digite sua nota: "))
let nota2 = parseFloat(prompt(" Por favor Digite sua nota: "))


let resultado = (nota+nota2)/2

if (resultado >=7){
    console.log(`Parabens você passou com nota ${resultado}`)
}

else if (resultado <7){
    console.log(`Você reprovou com nota ${resultado}`)
}


