function sortear(){
    let quantidadeDeNumeros = Number(document.getElementById('quantidade').value);
    let numeroMinimo = Number(document.getElementById('de').value);
    let numeroMaximo = Number(document.getElementById('ate').value);

    let numeroSorteados = [];
    let numero

    for(let i = 0; i < quantidadeDeNumeros; i++){
        numero = sorteadorDeNumero(numeroMinimo, numeroMaximo);
        numeroSorteados.push(numero)
    } 
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeroSorteados}</label>`
}

function sorteadorDeNumero(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}