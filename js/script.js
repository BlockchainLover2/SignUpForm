const button = document.querySelector("button")
const password1 = document.querySelector("input#password")
const password2 = document.querySelector("input#confirm-pass")





password2.addEventListener('input',  create)
password1.addEventListener('input',  create)


function create(){
    if(password1.value !== password2.value
        || password1.value === "" || password2.value === ""){
        button.disabled = true
        button.classList.remove("clickable")
    }
    else{
        button.disabled = false
        if(!button.classList.contains("clickable"))
            button.classList.add("clickable")
    }
}
