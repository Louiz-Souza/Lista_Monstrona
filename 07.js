const prompt = require(`prompt-sync`)()

const desconto = prompt("Você é estudante? ")
const desconto2 = prompt("você tem 60 anos ou mais?")

if(desconto == "sim" || desconto2 == "não" || desconto == "não" || desconto2 =="sim"){
    console.log("você tem desconto")
}else{
    console.log("você não tem desconto")
}


