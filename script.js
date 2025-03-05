// variaveis globais
let nomeVendedor = '';
let idadeVendedor = 0;
let vendasVendedor = 0;
let cargaHorariaVendedor = 0;


function sairSistema() {
    alert('sair do sistema');
    localStorage.clear();
    return
}
function paginaCadastroVendedor() {
    window.location.href = 'cadastro-vendedor/cadastroVendedor.html';
}
document.querySelector('.btn-cadastrar').addEventListener('click', paginaCadastroVendedor);
document.querySelector('.btn-sair').addEventListener('click', sairSistema);

