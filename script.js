const fullName = document.getElementById('full-name')

if (fullName) {
    fullName.addEventListener('input', () => {
        if (fullName.value.length <= 2) {
            fullName.classList.add('error')
             
        } else {
            fullName.classList.remove('error')
        } 
    })
}

const email = document.getElementById('epost')
    
if (email) {
    email.addEventListener('input', () => {
        const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailValidation.test(email.value)) {
            email.classList.add('error')
        } else {
            email.classList.remove('error')
        }
    })
}


const telefon = document.getElementById('tlf')

if (telefon) {
    telefon.addEventListener('input', () => {
        const phonePattern = /^[+\d-]*\d+[+\d-]*$/
        const onlyDigitsAndSymbols = /^[+\d-]+$/
    
        if (telefon.value.trim().length < 9 || !onlyDigitsAndSymbols.test(telefon.value.trim()) || !phonePattern.test(telefon.value.trim())) {
            telefon.classList.add('error')             
        } else {
            telefon.classList.remove('error')
        }
    })
}


const meddelande = document.getElementById('msg')

if(meddelande){
    meddelande.addEventListener('input', () => {
        if(meddelande.value.trim().length > 150){
            meddelande.classList.add('error')           
        }else{
            meddelande.classList.remove('error')
        }
    })
}


const btn = document.getElementById('btn-send-form')



