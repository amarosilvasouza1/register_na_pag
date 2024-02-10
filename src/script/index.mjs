import dataUser from "./data.mjs"

const clikEnter = () => {
    const enter = document.querySelector(".enter_login")
    enter.addEventListener("click", () => {
        inputAnalysisUser()
    })
}

const inputAnalysisUser = () => {
    const password1 = document.querySelector(".password_input")
    const email1 = document.querySelector(".email_input")
    const repeatPassword1 = document.querySelector(".password_repeat_input")
    const name1 = document.querySelector("")

    const password = password1.value
    const email = email1.value
    const repeatPassword = repeatPassword1.value
    const name = name1.value
    
    // chame sua funçao abaixo passando os paramentos de (password, email, reptyPasword , name)
}

// faça uma funçao que resebe (password, email, reptyPasword , name) e addiciona un novo usuario a {tadaUser} que esta em data.njs que esta importado nja linha 1
// nao se esqueca de definir o acceso do usuario como (false)
// faça sua logica a parti da qui 

clikEnter()

