//Contagem de Aunos
// Concatenação - EX: console.log('O número ' + contador + ' é PAR')
    // Interpolação serve para se colocar valores de variáveis dentro de um texto.
    // Para isso usa-se a crase `` - EX: console.log(`O número ${contador} é PAR!`) 

let quantidadeAlunos = [
    "Pedro",
    "Paulo",
    "João",
    "Fábio",
    "Laura",
    "Marcela",
    "Marina",
    "Diogo",
    "Bruno",
    "Maria",
    "Paola",
    "Eduarda",
]

for(let contador = 0; contador < quantidadeAlunos.length; contador++) {
    // Resto % -> Retorna o valor de uma divisão inteira

    if(contador == 0) {
        console.log("O número é ZERO")
    }else if(contador % 2 == 0) {
        // Interpolação
        console.log(`O número ${contador} é PAR`) 
    }else if(contador % 2 == 1) {
        // Concatenação
        console.log('o número ' + contador + ' é IMPAR')            
    }
}