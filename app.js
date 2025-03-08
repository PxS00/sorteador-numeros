function sortear(){
    let quantidadeDeNumeros = Number(document.getElementById('quantidade').value);
    let numeroMinimo = Number(document.getElementById('de').value);
    let numeroMaximo = Number(document.getElementById('ate').value);

    alert(`Quantidade: ${quantidadeDeNumeros}`);
    alert(`Do número: ${numeroMinimo}`);
    alert(`Até o número: ${numeroMaximo}`);
}