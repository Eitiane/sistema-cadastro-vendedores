let mensagemConsulta = 'Erro a consultar dados';

function consultarVendedor() {
    if (nomeVendedor == '') {
        alert(mensagemConsulta);
        return;
    } else {
        alert('consulta de vendedor')
        alert(`nome: ${nomeVendedor}\nIdade: ${idadeVendedor}\nVendas: ${vendasVendedor}\nCarga Horária: ${cargaHorariaVendedor}`);
    }
}
document.querySelector('.btn-consultar').addEventListener('click', consultarVendedor);
