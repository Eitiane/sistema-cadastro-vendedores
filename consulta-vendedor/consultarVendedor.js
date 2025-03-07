let mensagemErroConsulta = 'Erro a consultar dados';
LOCAL_STORAGE_KEY = 'vendedores';

function consultarVendedor() {
    let vendedores = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    let tabela = document.querySelector('.tabela-vendedores');
}
    /* if (nomeVendedor == '') {
        alert(mensagemConsulta);
        return;
    } else {
        alert('consulta de vendedor')
        alert(`nome: ${nomeVendedor}\nIdade: ${idadeVendedor}\nVendas: ${vendasVendedor}\nCarga Horária: ${cargaHorariaVendedor}`);
    } */
window.onload = consultarVendedor;
document.querySelector('.btn-voltar').addEventListener('click', voltarPaginaInicial);
