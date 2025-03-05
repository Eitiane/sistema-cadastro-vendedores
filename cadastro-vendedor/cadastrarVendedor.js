let mensagemSucesso = 'Cadastro realizado com sucesso \nnome do vendedor: ';
let mensagemErro = 'Cadastro não realizado';
LOCAL_STORAGE_KEY = 'vendedores';


function cadastrarVendedor() {
    nomeVendedor = document.getElementById('nome').value;
    idadeVendedor = parseInt(document.getElementById('idade').value);
    vendasVendedor = parseInt(document.getElementById('quant-vendas').value);
    let cargaSelecionada = document.querySelector('input[name="carga-horaria"]:checked');
    if (!cargaSelecionada) {
        alert('Selecione uma carga horária');
        return;
    }
    cargaHorariaVendedor = parseInt(cargaSelecionada.value);
    if (idadeVendedor < 16 || vendasVendedor < 20 || cargaSelecionada == null) {
        alert('dados invalidos');
        alert(mensagemErro);
        return;
    } else {
        alert(mensagemSucesso + nomeVendedor);
        salvarLocal(nomeVendedor, idadeVendedor, vendasVendedor, cargaHorariaVendedor);
    }
}

function salvarLocal(nomeVendedor, idadeVendedor, vendasVendedor, cargaHorariaVendedor) {
    let vendedores = localStorage.getItem(LOCAL_STORAGE_KEY);
    vendedores = vendedores ? JSON.parse(vendedores) : [];
    vendedores.push({
        nome: nomeVendedor,
        idadeVendedor: idadeVendedor,
        vendasVendedor: vendasVendedor,
        cargaHorariaVendedor: cargaHorariaVendedor
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(vendedores));
    return vendedores;
}
document.querySelector('.btn-submeter').addEventListener('click', cadastrarVendedor);
document.querySelector('.btn-voltar').addEventListener('click', voltarPaginaInicial);
