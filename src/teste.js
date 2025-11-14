// Declarando as variáveis "nome" e "nivelXP"
let nomePersonagem = "CJ"
let nivelXP = 500

console.log("Olá, " +nomePersonagem)
console.log()

/* switch(nivelXP) {
    case 1000:
        console.log("O Herói " + nomePersonagem + ", está no nivel " + nivelXP + " 'FERRO'")
        break

    case 1001:
    case 2000:
        console.log("O Herói " + nomePersonagem + ", está no nivel " + nivelXP + " 'BRONZE'")
        break

    case 2001:
    case 5000:
        console.log("O Herói " + nomePersonagem + ", está no nivel " + nivelXP + " 'PRATA'")
        break

    default:
        console.log("O Herói " + nomePersonagem + ", está no nivel " + nivelXP + " 'RADIANTE'")
} */

// Algumas condições..
if(nivelXP < 1000) { // Se for menor que 1000... 
    console.log("O Herói " + nomePersonagem + ", está no nivel " + nivelXP + " 'FERRO'")
} else if(nivelXP >= 1001 && nivelXP <= 2000) { // Se for maior que 1001 e menor que 2000...
    console.log("O Herói " + nomePersonagem + ", está no nivel " + nivelXP + " 'BRONZE'")
} else if(nivelXP >= 2001 && nivelXP <= 5000) {
    console.log("O Herói " + nomePersonagem + ", está no nivel " + nivelXP + " 'PRATA'")
} else if(nivelXP >= 6001 && nivelXP <= 7000) {
    console.log("O Herói " + nomePersonagem + ", está no nivel " + nivelXP + " 'OURO'")
} else if(nivelXP >= 7001 && nivelXP <= 8000) {
    console.log("O Herói " + nomePersonagem + ", está no nivel " + nivelXP + " 'PLATINA'")
} else if(nivelXP >= 8001 && nivelXP <= 9000) {
    console.log("O Herói " + nomePersonagem + ", está no nivel " + nivelXP + " 'ASCEDENTE'")
} else if(nivelXP >= 9001 && nivelXP <= 10000) {
    console.log("O Herói " + nomePersonagem + ", está no nivel " + nivelXP + " 'IMORTAL'")
} else {
    console.log("O Herói " + nomePersonagem + ", está no nivel " + nivelXP + " 'RADIANTE'")
}