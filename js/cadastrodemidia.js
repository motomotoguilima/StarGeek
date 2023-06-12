var listaFilmes = []
listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (listaFilmes == null) {
    listaFilmes = []
}


function cadastrarFilmes() {
    var filme = document.getElementById("inp").value
    var genero = document.getElementById("inp1").value
    var linkDfilme = document.getElementById("inp3").value

    var objFilme = {
        filme: filme,
        genero: genero,
        linkes: linkDfilme
    }
    listaFilmes.push(objFilme)
    localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes))

    alert('midia cadastrada com sucesso')
    location.href="pesquisar.html"
}

function mostrarCadastro(){
    document.getElementById('resultados').innerHTML=``
    listaFilmes.forEach((item, posi) =>{
        document.getElementById('resultados').innerHTML +=
        ` <br> <p class="TextoCadastro">midia:${item.filme} <img src='excluir.svg' onclick='excluirMidia(${posi}) '></p>  `
    })
}
function excluirMidia(item){
    if(confirm('deseja realmente excluir esta midia?')){
        listaFilmes.splice(item, 1)
        localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes))
        mostrarCadastro()
    }
}
