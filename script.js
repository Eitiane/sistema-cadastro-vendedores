// variaveis globais
let nomeVendedor = '';
let idadeVendedor = 0;
let vendasVendedor = 0;
let cargaHorariaVendedor = 0;

function voltarPaginaInicial() {
    window.location.href = '../index.html';
}

function sairSistema() {
    alert('sair do sistema');
    localStorage.clear();
    return
}
function paginaCadastroVendedor() {
    window.location.href = 'cadastro-vendedor/cadastroVendedor.html';
}
function paginaConsultaVendedor(){
    window.location.href='consulta-vendedor/consultaVendedor.html';
}
document.querySelector('.btn-cadastrar').addEventListener('click', paginaCadastroVendedor);
document.querySelector('.btn-consultar').addEventListener('click', paginaConsultaVendedor);
document.querySelector('.btn-sair').addEventListener('click', sairSistema);


