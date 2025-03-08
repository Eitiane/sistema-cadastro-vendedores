document.addEventListener("DOMContentLoaded", function () {
    let mensagemErroConsulta = 'Erro a consultar dados';
    LOCAL_STORAGE_KEY = 'vendedores';

    function consultarVendedor() {
        let vendedores = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        let tabela = document.getElementById('tabela-vendedores');
        if (vendedores.length === 0) {
            alert(mensagemErroConsulta);
            return;
        }
        vendedores.forEach(vendedores => {
            let linha = document.createElement('tr');
            linha.innerHTML = `
        <td>${vendedores.nome}</td>
        <td>${vendedores.idadeVendedor}</td>
        <td>${vendedores.vendasVendedor}</td>
        <td>${vendedores.cargaHorariaVendedor}</td>
    `;
            tabela.appendChild(linha);

        });
    }
    consultarVendedor();
    document.querySelector('.btn-voltar').addEventListener('click', voltarPaginaInicial);
}); 