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
// DICA: nao se esqueca de definir o acceso do usuario como (false)
// faça sua logica a parti da qui 




// na sua funçao verifique se ja tem um usuario com o mesmo nome ou email em dataUser e se ja estiver retone que o usuario ja posui uma conta criada 
// se nao, colete todos os paramentos e adicione ao array em dadaUser
// ao final retone que o usuario conseguiu se registra com suseco
// DICA: nao se esqueca de definir o acceso do usuario como (false)

clikEnter()

