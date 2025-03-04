alert('Boas vindas ao sistema de cadastros e consultas de vendedores');

// variaveis globais
let nomeVendedor = '';
let idadeVendedor = 0;
let vendasVendedor = 0;
let cargaHorariaVendedor = 0;
let mensagemConsulta = 'Erro a consultar dados';
let mensagemSucesso = 'Cadastro realizado com sucesso \nnome do vendedor: ';

// funções do sistema
function menuSistema() {
    alert('Escolha o que você deseja fazer:');
    do {
        let opcao = prompt('Digite o numero da opção desejada\n' +
            '1- cadastrar vendedor \n' +
            '2- consultar vendedor\n' +
            '3 sair do siestma');
        switch (opcao) {
            case '1':
                cadastrarVendedor();
                break;
            case '2':
                consultarVendedor();
                break;
            case '3':
                sairSistema();
                break;
            default:
                alert('opção invalida');
                menuSistema();
        }
    } while (opcao !== "3")
}

function cadastrarVendedor() {
    alert('cadastro de Vendedores')
    nomeVendedor = prompt('digite o nome do vendedor');
    idadeVendedor = prompt('digite a idade do vendedor');
    if (idadeVendedor < 16){
        alert('idade invalida');
        menuSistema();
    }
    vendasVendedor = prompt('digite os numeros de vendas do vendedor');
    if(vendasVendedor <20){
        alert('esse vendedor ainda está na fase de experiência');
        menuSistema();
    }
    cargaHorariaVendedor = prompt('digite o carga horaria do vendedor');
    if(cargaHorariaVendedor <6 || cargaHorariaVendedor >12 || cargaHorariaVendedor == 10){
        alert('carga horaria invalida, digite 6, 8 ou 12');
        menuSistema();
    }
    alert(mensagemSucesso + nomeVendedor);
    menuSistema();
}

function consultarVendedor() {
    if (nomeVendedor == '') {
        alert(mensagemConsulta);
        menuSistema();
    } else {
        alert('consulta de vendedor')
        alert(`nome: ${nomeVendedor}\nIdade: ${idadeVendedor}\nVendas: ${vendasVendedor}\nCarga Horária: ${cargaHorariaVendedor}`);
    }
}

function sairSistema() {
    alert('sair do sistema');
    return
}

// menu do sistema
menuSistema();
//document.getElementById('cadastrarVendedor').addEventListener('click', cadastrarVendedor);