let mensagemSucesso = 'Cadastro realizado com sucesso \nnome do vendedor: ';
let mensagemErro = 'Cadastro não realizado';

function cadastrarVendedor() {
    alert('cadastro de Vendedores')
    nomeVendedor = prompt('digite o nome do vendedor');
    idadeVendedor = prompt('digite a idade do vendedor');
    if (idadeVendedor < 16){
        alert('idade invalida');
        alert(mensagemErro);
        return;
    }
    vendasVendedor = prompt('digite os numeros de vendas do vendedor');
    if(vendasVendedor <20){
        alert('esse vendedor ainda está na fase de experiência');
        alert(mensagemErro);
        return;
    }
    cargaHorariaVendedor = prompt('digite o carga horaria do vendedor');
    if(cargaHorariaVendedor <6 || cargaHorariaVendedor >12 || cargaHorariaVendedor == 10){
        alert('carga horaria invalida, digite 6, 8 ou 12');
        alert(mensagemErro);
        return;
    }
    alert(mensagemSucesso + nomeVendedor);
    return;
}
document.querySelector('.btn-cadastrar').addEventListener('click', cadastrarVendedor);
