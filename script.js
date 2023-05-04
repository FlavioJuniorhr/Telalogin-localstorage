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
