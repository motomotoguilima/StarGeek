var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaUsuarios == null) {
    listaUsuarios = []
}

function login() {
    var email = document.getElementById("inp1").value
    var senha = document.getElementById("inp2").value

    var encontrado = false
    listaUsuarios.forEach((item) => {
        if (email == item.email && senha == item.senha && encontrado == false) {
            alert(`login acessado com sucesso,seja bem vindo, ${item.email}`)
            encontrado = true
            window.location.href = "pesquisar.html"
        }
    })
    if (encontrado == false){
        alert("usuario ou senha não encontrada")
    }
}