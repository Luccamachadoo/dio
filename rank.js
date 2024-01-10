
function saldoVitorias (numeroVitorias, numeroDerrotas) {
    let saldo = numeroVitorias - numeroDerrotas;
    return saldo

    let nivelHeroi;
    if (saldo < 10) {
        nivelHeroi = "Ferro"
    } else if (saldo >= 11 && saldo < 20) {
        nivelHeroi = "Bronze"
    } else if (saldo >= 21 && saldo < 50) {
        nivelHeroi = "Prata"
    } else if (saldo >= 51 && saldo < 80) {
        nivelHeroi = "Ouro"
    } else if (saldo >= 81 && saldo < 90) {
        nivelHeroi = "Diamante"
    } else if (saldo >= 91 && saldo < 100) {
        nivelHeroi = "Lendário"
    } else {
        nivelHeroi = "Imortal"
    }


    return `O herói tem saldo de ${saldoVitorias()} e o seu nível é ${nivelHeroi}`

}



let resultado = (saldoVitorias(77, 20));
console.log(resultado);