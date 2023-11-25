// Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let vitorias = getRandomInt(110)
let derrotas = getRandomInt(110)
let saldoVitorias = vitorias - derrotas
let nivel
switch(true){
    case saldoVitorias < 10:
        nivel = "Ferro"
    break

    case saldoVitorias>= 11 && saldoVitorias <= 20:
        nivel = "Bronze"
    break

    case saldoVitorias>= 21 && saldoVitorias <= 50:
        nivel = "Prata"
    break

    case saldoVitorias>= 51 && saldoVitorias <= 80:
        nivel = "Ouro"
    break

    case saldoVitorias>= 81 && saldoVitorias <= 90:
        nivel = "Diamante"
    break

    case saldoVitorias>= 91 && saldoVitorias <= 100:
        nivel = "Lendário"
    break

    case saldoVitorias>= 101:
        nivel = "Imortal"
    break
}

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)
