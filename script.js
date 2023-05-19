var Csn = document.getElementById("Senha")
var Eem = document.getElementById("EEmail")
var Esn = document.getElementById("ESenha")
window.addEventListener("load", function () {

    //dashboard.textContent = exibir()

    var str = ""
    for (let i = 0, len = localStorage.length; i < len; i++) {
        let oi = localStorage.key(i)
        let S = localStorage.getItem(oi)
        ///str += `${[i + 1]}. Cadastro de: ${oi}<br>ㅤㅤEmail: ${S}  <br>`
        /* let use = localStorage.getItem(eemail)
        if (use) {
            console('ok')
            dashboard.innerHTML += `
            <div id="userName">${[i + 1]}. Cadastro de: ${oi}</div>
            <div id="userEmail">Email: ${S}</div>
            `
        }
        const nameDash = document.getElementById('userName')
        const emailDash = document.getElementById('userEmail')
        nameDash.innerHTML = `${[i + 1]}. Cadastro de: ${oi}`
        emailDash.innerHTML = `Email: ${S}` */
    }
})

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const usuario = document.getElementById('eemail').value;
    const senha = document.getElementById('ssenha').value;
    const cadastro = JSON.parse(localStorage.getItem(usuario));
    function real() {
        
    }
    var Ds = 0
    var Dc = 0
    var De = 0
    for (let i = 0, len = localStorage.length; i < len; i++) {
        let oi = localStorage.key(i)
        let S = localStorage.getItem(oi)

        if (!usuario || !senha) {
            //  return showToast('error', 'Campos incompletos');
            Ds = Ds + 1
        

            // return showToast('error', 'Usuário ou senha incorreta');
        } else if (oi == senha && S == usuario) {
            
            // const dashboard = document.getElementById('dadosContainer')
            // var str = ""
            Dc = Dc + 1
            ///str += `${[i + 1]}. Cadastro de: ${oi}<br>ㅤㅤEmail: ${S}  <br>`
            /* dashboard.innerHTML += `
                <div id="userName">${[i + 1]}. Cadastro de: ${oi}</div>
                <div id="userEmail">Email: ${S}</div>
                ` */
        }else{
            De = De + 1 
        }
        /* const nameDash = document.getElementById('userName')
        const emailDash = document.getElementById('userEmail')
        nameDash.innerHTML = `${[i + 1]}. Cadastro de: ${oi}`
        emailDash.innerHTML = `Email: ${S}` */
    }
    if(Ds > 0){
        alert("Sem dados")
    }else if(Dc > 0){
        alert("Seja bem vindo")
    }else{
        alert("Dados errados ou inclompletos")
    }
});
