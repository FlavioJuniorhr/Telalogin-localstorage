let Lemail = document.getElementById("Lemail")
let Lsenha = document.getElementById("Lsenha")
const dashboard = document.getElementById('dadosContainer')
//dashboard.textContent = exibir()

var str = ""
for (let i = 0, len = localStorage.length; i < len; i++) {
    let oi = localStorage.key(i)
    let S = localStorage.getItem(oi)
    ///str += `${[i + 1]}. Cadastro de: ${oi}<br>ㅤㅤEmail: ${S}  <br>`
    dashboard.innerHTML += `
            <div id="userName">${[i + 1]}. Cado de: ${oi}</div>
            <div id="userEmail">Email: ${S}</div>
            `

    /* const nameDash = document.getElementById('userName')
    const emailDash = document.getElementById('userEmail')
    nameDash.innerHTML = `${[i + 1]}. Cadastro de: ${oi}`
    emailDash.innerHTML = `Email: ${S}` */
}
