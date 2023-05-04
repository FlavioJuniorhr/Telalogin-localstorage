window.addEventListener("load", function(){
    let salvar = document.getElementById("btnAdd")
    let Em = document.getElementById("exampleInputNome")
    let Sn = document.getElementById("exampleInputnomem")
    let conteudo = document.getElementById("conteudo")
    let limpar = document.getElementById("btnLimp")
  
    salvar.addEventListener("click", function(){
        let input1=Em.value
        let input2=Sn.value
        localStorage.setItem(input1, input2)
  
        exibir()
    })
    limpar.addEventListener("click", function(){
        localStorage.clear()

        exibir()
    })

    function exibir() {
        let str = ""
        for (let i = 0, len = localStorage.length; i < len; i++) {
            let exampleInputNome = localStorage.key(i)
            let Sn = localStorage.getItem(exampleInputNome)
            str += `${[i+1]} . ${exampleInputNome} : ${Sn}  <br>`
        }

        Sn.value = ""
        Em.value = ""
        conteudo.innerHTML = str
    }
    exibir()
})

//Cadastro
function retornaV(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('endereco').value = (conteudo.logradouro)
        document.getElementById('bairro').value = (conteudo.bairro)
        document.getElementById('cidade').value = (conteudo.localidade)
        document.getElementById('complemento').value = (conteudo.complemento)
    } else {
        alert("CEP não encontrado")
    }
}

function buscacep(valor) {
    var cep = valor.replace(/\D/g, '')
    if (cep != "") {
        var validarcep = /^[0-9]{8}$/
        if (validarcep.test(cep)) {
            document.getElementById('endereco').value = ". . ."
            document.getElementById('bairro').value = ". . ."
            document.getElementById('cidade').value = ". . ."
            document.getElementById('complemento').value = ". . ."
            var script = document.createElement('script')
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=retornaV`
            document.body.appendChild(script)
        } else {
            alert("Formato inválido")
        }
    }
}
