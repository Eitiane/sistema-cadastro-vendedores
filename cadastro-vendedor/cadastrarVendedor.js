let mensagemSucesso = 'Cadastro realizado com sucesso \nnome do vendedor: ';
let mensagemErro = 'Cadastro não realizado';


function voltarPaginaInicial() {
    window.location.href = '../index.html';
}
function cadastrarVendedor() {
    nomeVendedor = document.getElementById('nome').value;
    idadeVendedor = parseInt(document.getElementById('idade').value);
    vendasVendedor = parseInt(document.getElementById('quant-vendas').value);
    let cargaSelecionada = document.querySelector('input[name="carga-horaria"]:checked');
    cargaHorariaVendedor = parseInt(cargaSelecionada.value);
    if (idadeVendedor <16 || vendasVendedor < 20 || cargaSelecionada == null) {
        alert('dados invalidos');
        alert(mensagemErro);
        return;
    }else{
    alert(mensagemSucesso + nomeVendedor);
    return;
}}
document.querySelector('.btn-submmeter').addEventListener('click', cadastrarVendedor);
document.querySelector('.btn-voltar').addEventListener('click', voltarPaginaInicial);
