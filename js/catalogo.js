var listaFilmes = []
listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (listaFilmes == null) {
    listaFilmes = []
}

function exibirCatalogo(){
    listaFilmes.forEach((item, pos) =>{
        if (item.genero == 'filmes'){
            document.getElementById('listaFilmes').innerHTML+=
           `<img src="${item.linkes}"> `
        }
    })
    listaFilmes.forEach((item, pos) => {
        if (item.genero == 'animes'){
            document.getElementById('listaAnimes').innerHTML+=
           `<img src="${item.linkes}">  `
        }
    })
    listaFilmes.forEach((item, pos) =>{
        if (item.genero == 'jogos'){
            document.getElementById('listaJogos').innerHTML+=
           `<img src="${item.linkes}"> `
        }
    })
    listaFilmes.forEach((item, pos) =>{
        if (item.genero == 'series'){
            document.getElementById('listaSeries').innerHTML+=
           `<img src="${item.linkes}">`
        }
    })
    
}

exibirCatalogo()

 