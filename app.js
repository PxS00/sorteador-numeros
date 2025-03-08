function sortear(){
    let quantidadeDeNumeros = Number(document.getElementById('quantidade').value);
    let numeroMinimo = Number(document.getElementById('de').value);
    let numeroMaximo = Number(document.getElementById('ate').value);

    let numeroSorteados = [];
    let numero

    for(let i = 0; i < quantidadeDeNumeros; i++){
        numero = sorteadorDeNumero(numeroMinimo, numeroMaximo);
        while(numeroSorteados.includes(numero));{
            numero = sorteadorDeNumero(numeroMinimo, numeroMaximo);
        }
       numeroSorteados.push(numero);
    } 
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeroSorteados}</label>`;
    alterarStatusBtn ();
}

function sorteadorDeNumero(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBtn(){
    const btnReiniciar = document.getElementById('btn-reiniciar');
    if (btnReiniciar.classList.contains('container__botao-desabilitado')){
        btnReiniciar.classList.remove('container__botao-desabilitado');
        btnReiniciar.classList.add('container__botao')
    }else{
        btnReiniciar.classList.remove('container__botao');
        btnReiniciar.classList.add('container__botao-desabilitado')
    }
}
