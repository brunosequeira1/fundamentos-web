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
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

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
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
        txtEmail.style.border = '3px solid red'

    } else {
        txtEmail.innerHTML = 'Nome Válido'
        txtEmail.style.color = 'green'
        txtEmail.style.border = '3px solid green'
        emailOk = true
    }

}

function validaAssunto() {
    let txtAssunto= document.querySelector('#txtAssunto')
    if (assunto.value.length >=100) {
        txtAssunto.innerHTML = 'Texto muito extenso, digite no máximo 100 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'


    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
        
    }

}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    }
    else {
        alert ('Preencha o formulário corretamente antes de enviar.')
    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = '600px'
} 

function mapaNormal(){
    mapa.style.width = "450px"
    mapa.style.height = '300px'
}