// Declarando as variáveis "nome" e "nivelXP"
let nomePersonagem = "CJ"
let nivelXP = 10000

console.log("Olá, " +nome)
console.log()

// Algumas condições..
if(nivelXP < 1000) {
    console.log("O Herói " + nomePersonagem + ", está no nivel " + nivelXP + " 'FERRO'")
} else if(nivelXP === 1001 && 2000) {
    console.log("O Herói " + nomePersonagem + ", está no nivel " + nivelXP + " 'BRONZE'")
} else {
    console.log("O Herói " + nomePersonagem + ", está no nivel " + nivelXP + " 'RADIANTE'")
}