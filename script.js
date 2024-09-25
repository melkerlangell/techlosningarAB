//kontakt & validering
const btn = document.getElementById('btn-send-form')

btn.disabled = true

const fullName = document.getElementById('full-name')
const email = document.getElementById('epost')
const telefon = document.getElementById('tlf')
const meddelande = document.getElementById('msg')

let nameValid = false
let epostValid = false
let telValid = false
let msgValid = false

const kontrollBtn = () =>{
    if(nameValid && epostValid && telValid && msgValid){
        btn.disabled = false
    }else{
        btn.disabled = true
    }
}

if (fullName) {
    fullName.addEventListener('input', () => {
        const onlyAplhabet = /^[a-zA-Z\s]+$/
        if (fullName.value.length <= 2 || !onlyAplhabet.test(fullName.value)) {
            fullName.classList.add('error') 
            nameValid = false   
        } else {
            fullName.classList.remove('error')
            nameValid = true
        } 
        kontrollBtn()
    })
}

    
if (email) {
    email.addEventListener('input', () => {
        const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailValidation.test(email.value)) {
            email.classList.add('error')
            epostValid = false   
        } else {
            email.classList.remove('error')
            epostValid = true
        }
        kontrollBtn()
    })
}

if (telefon) {
    telefon.addEventListener('input', () => {
        const phonePattern = /^[+\d-]*\d+[+\d-]*$/
        const onlyDigitsAndSymbols = /^[+\d-]+$/
        if (telefon.value.trim().length < 9 || telefon.value.trim().length > 15 || !onlyDigitsAndSymbols.test(telefon.value.trim()) 
            || !phonePattern.test(telefon.value.trim())) {
            telefon.classList.add('error') 
            telValid = false            
        } else {
            telefon.classList.remove('error')
            telValid = true
        }
        kontrollBtn()
    })
}

if(meddelande){
    meddelande.addEventListener('input', () => {
        if(meddelande.value.trim().length === 201 || meddelande.value.trim().length === 0){
            meddelande.classList.add('error')         
            msgValid = false   
        }else{
            meddelande.classList.remove('error')
            msgValid = true
        }
        kontrollBtn()
    })
}


//hamburger
document.getElementById("hamburger").addEventListener("click", function() {
    const navLi = document.getElementById("nav-li");
    navLi.classList.toggle("active");
    document.body.classList.toggle("menu-open");
})




