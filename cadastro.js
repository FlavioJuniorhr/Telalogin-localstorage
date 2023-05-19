var Csn = document.getElementById("Senha")
//var Eem = document.getElementById("EEmail")
//var Esn = document.getElementById("ESenha")

var salvar = document.getElementById("btnAdd")
var Nm = document.getElementById("Nome")
var Email = document.getElementById("Email")
var Ccsn = document.getElementById("CSenha")
var conteudo = document.getElementById("conteudo")

salvar.addEventListener("click", function () {
    if (Csn.value == Ccsn.value) {
        var input1 = Nm.value
        var input2 = Email.value
        localStorage.setItem(input1, input2)
    } else {
        document.write("Erro")
    }


})
