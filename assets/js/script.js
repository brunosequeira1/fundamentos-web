/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementyName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = window.document.querySelector('#email')
let assunto = window.document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    let checkNumber = isNaN(nome.value)


    if (nome.value.length < 3 || !checkNumber) {

        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
        txtNome.style.border = '3px solid red'

    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        txtNome.style.border = '3px solid green'

    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@' == -1) || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = 'Email Inválido'
        txtNome.style.color = 'red'
        txtNome.style.border = '3px solid red'

    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        txtNome.style.border = '3px solid green'

    }

}