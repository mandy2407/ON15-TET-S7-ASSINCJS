//function 

/*function somar(numero) {
    console.log (numero + numero)
    return numero + numero
}*/

//arrow funciotin
/*let somar = (numero) => {
    console.log (numero + numero)
    return numero + numero   
}

somar(3)*/

//Processo sincrono e sequencial:
/*console.log('Esse console log vem primeiro')

setTimeout(() => {
    console.log('Esse console log vai em segundo')  
}, 2000)

console.log('Esse console log vem primeiro')*/

let mostrarPrimeiro = () => {
    setTimeout(() => {
        return console.log("Essa mensagem deve")
}, 3000)
}

let mostrarSegundaParte = () => {
    setTimeout(() => {
        return console.log("Completar a frase")
}, 2000)
}

mostrarPrimeiraParte()
mostrarSegundaParte()