var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaUsuarios == null) {
    listaUsuarios = []
}
console.log(listaUsuarios);

function cadastrarUsuario() {
    var nomeC = document.getElementById("inp").value
    var digiteEM = document.getElementById("inp1").value
    var senha = document.getElementById("inp2").value
    var dataDeN = document.getElementById("inp3").value
    var endereço = document.getElementById("inp4").value
    var cpf = document.getElementById("inp5").value

    
    var possoC = preencherCadastro(nomeC, digiteEM, senha, dataDeN, endereço, cpf)
    if (possoC == false) {
        return
    }

    var objUsuario = {
        nome: nomeC,
        email: digiteEM,
        senha: senha,
        data: dataDeN,
        endereço: endereço,
        cpf: cpf
    }
    listaUsuarios.push(objUsuario)
    localStorage.setItem('bdUsuarios', JSON.stringify(listaUsuarios))

    document.getElementById("inp").value = ''
    document.getElementById("inp1").value = ''
    document.getElementById("inp2").value = ''
    document.getElementById("inp3").value = ''
    document.getElementById("inp4").value = ''
    document.getElementById("inp5").value = ''
    document.getElementById("inp").focus()

    alert('usuario cadastrado com sucesso')
    location.href="login.html"
}

function preencherCadastro(nomeC, digiteEM, senha, dataDeN, endereço, cpf) {
    if (nomeC == '' || digiteEM == '' || senha == '' ||dataDeN == '' || endereço == '' ||  cpf == '') {
        alert("e obrigatorio preencher todos os campos")
        return false
    }
}