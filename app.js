function sortear() {
    const quantidadeDeNumeros = Number(document.getElementById('quantidade').value);
    const numeroMinimo = Number(document.getElementById('de').value);
    const numeroMaximo = Number(document.getElementById('ate').value);

    if (isNaN(quantidadeDeNumeros) || isNaN(numeroMaximo) || isNaN(numeroMinimo)){
        alert('Os caracteres que você informou não são válidos');
        return;
    }

    if (quantidadeDeNumeros <= 0 || numeroMinimo >= numeroMaximo) {
        alert('Por favor, verifique os números informados');
        return;
    }

    const intervalo = numeroMaximo - numeroMinimo + 1; 
        if (quantidadeDeNumeros > intervalo){
        alert('A quantidade de números informada é maior que o intervalo');
        return;
    }
     let numeroSorteados = [];

    for (let i = 0; i < quantidadeDeNumeros; i++ ) {
        let numero = sorteadorDeNumero(numeroMinimo, numeroMaximo);
        
        while(numeroSorteados.includes(numero)){
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
    let btnReiniciar = document.getElementById('btn-reiniciar');
    if (btnReiniciar.classList.contains('container__botao-desabilitado')){
        btnReiniciar.classList.remove('container__botao-desabilitado');
        btnReiniciar.classList.add('container__botao')
    }else{
        btnReiniciar.classList.remove('container__botao');
        btnReiniciar.classList.add('container__botao-desabilitado')
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBtn();
}
