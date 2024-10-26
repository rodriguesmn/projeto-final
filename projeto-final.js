let menu = 0
let listaDoador = []

while (menu !== 5){
    menu = Number(prompt(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
1. Cadastrar doador
2. Listar doadores
3. Buscar doador por tipo sanguíneo
4. Buscar doador por data da última doação
5. Sair
Escolha uma opção:`))
    switch(menu){
        case 1:
            cadastrarDoadores()
        break
        case 2: 
            console.log("Lista de doadores:")
            listaDoadores(listaDoador)
        break
        case 3:
            console.log("Resultado da busca:")
            listaDoadores(doadorPorTipoSanguineo(listaDoador))
        break
        case 4:
            console.log("Resultado da busca:")
            listaDoadores(doadorPorUltimaDataDoacao(listaDoador))
        break
        case 5:
            console.log("Sair.")
        break
        default:
            console.log("Inválido. Tente novamente.")

    }
}
function cadastrarDoadores(){
    const cadastroDoador = {
        nome: prompt("Insira o nome do doador:"),
        idade: Number(prompt("Insira a idade do doador:")),
        peso: Number(prompt("Insira o peso do doador:")),
        tipoSanguineo: prompt("Insira o tipo sanguíneo do doador:"),
        dataUltimaDoacao: new Date(
            Number(prompt("Informe o ano da última doação feita pelo doador:")),
            Number(prompt("Informe o mês da última doação feita pelo doador:")),
            Number(prompt("Informe o dia da última doação feita pelo doador:")))
    }
listaDoador.push(cadastroDoador)
}

function listaDoadores(listaDoadores1 = []){
    for(let i = 0; i < listaDoadores1.length; i++){
        console.log(`${listaDoadores1[i].nome} | ${listaDoadores1[i].idade} | ${listaDoadores1[i].peso} | ${listaDoadores1[i].tipoSanguineo} | ${listaDoadores1[i].dataUltimaDoacao.toLocaleDateString()}`)
    }
}

function doadorPorTipoSanguineo(listaDoadores1){
    let lista = []
    let buscaTipoSanguineo = prompt("Informe o tipo sanguíneo que está buscando:")
    for(let doador of listaDoadores1){
        if(doador.tipoSanguineo === buscaTipoSanguineo){
            lista.push(doador)
        }
    }
    return lista 
}

function doadorPorUltimaDataDoacao(listaDoadores1){
    let lista = []
    let ultimaData = new Date(
        Number(prompt("Informe o ano da última doação realizada pelo doador:")),
        Number(prompt("Informe o mês da última doação realizada pelo doador:")),
        Number(prompt("Informe o dia da última doação realizada pelo doador:")))
    for(let doador of listaDoadores1){ 
        if(doador.dataUltimaDoacao <= ultimaData){
        lista.push(doador)
    }
}
    return lista 
}