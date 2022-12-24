//Link da API
const url_api = "https://dadosabertos.camara.leg.br/api/v2"

//Referências HTML
const select_html = document.getElementById("partidos")
const membros_html = document.getElementById("membros")
const titulo_html = document.getElementById("tituloMembros")

//Variável para salvar dados do primeiro fetch para usar no segundo
let partidos = ""

//Event Listener para cada vez que uma opção da caixa seja selecionada
select_html.addEventListener("change", () =>{  
    const partidoSelecionado = partidos[select_html.value] //objeto com dados do partido selecionado
    toggleDisplay(document.getElementById("loadingPartido"))
    toggleDisplay(document.getElementById("partidoSelecionado"))
    membros_html.innerHTML = ""

    //Fetch para os dados de membros do partido selecionado
    fetch(`${url_api}/partidos/${partidoSelecionado.id}/membros`)
    .then(res =>{
        return res.json()
    })
    .then(data => {
        titulo_html.innerText = `Membros do partido ${partidoSelecionado.sigla}`
        data.dados.forEach((membro) => { //apresenta cada membro do partido selecionado
            const membro_html = `<div class="membro">
            <img class="fotos" src="${membro.urlFoto}">
            <div class="dados">
                <p>Nome: ${membro.nome}</p>
                <p>Estado: ${membro.siglaUf}</p>
                <p>Email: ${membro.email}</p>
            </div>
        </div>`

        membros_html.insertAdjacentHTML("beforeend", membro_html)
        })
        toggleDisplay(document.getElementById("loadingPartido"))
        toggleDisplay(document.getElementById("partidoSelecionado"))
    })
    .catch(error => console.log(error))
})

//Fetch para os dados dos partidos
fetch(`${url_api}/partidos`)
.then(res =>{
    return res.json()
})
.then(data => {
    partidos = data.dados
    data.dados.forEach((partido, index) => { //cria as opções com a sigla de cada partido
        const option = `<option value="${index}">${partido.sigla}</option>`
        select_html.insertAdjacentHTML("beforeend", option)
    });
    toggleDisplay(document.getElementById("loadingInicial"))
    toggleDisplay(document.getElementById("selecao"))
})
.catch(error => console.log(error))

function toggleDisplay(element) { //função para alternar o display dos elementos html entre os loadings
    if(element.style.display == "none"){
        element.style.display = "block"
    }
    else{
        element.style.display = "none"
    }
}