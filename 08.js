const prompt = require(`prompt-sync`)()

const senhaSalva = 777

const entrada = prompt("Digite sua Senha: ")

if (entrada == senhaSalva){
    console.log("sua senha esta correta")
}else{
    console.log("sua senha esta incorreta")
}