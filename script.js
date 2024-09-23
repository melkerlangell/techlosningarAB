const btn = document.getElementById('btn-send-form')

let isValid = true

const visaKnapp = () => {
    if (isValid) {
        btn.style.display = "block"
    } else {
        btn.style.display = "none" 
    }
}

const fullName = document.getElementById('full-name')

if (fullName) {
    fullName.addEventListener('input', () => {
        const onlyAplhabet = /^[a-zA-Z\s]+$/
        if (fullName.value.length <= 2 || !onlyAplhabet.test(fullName.value)) {
            fullName.classList.add('error')
            isValid = false
             
        } else {
            fullName.classList.remove('error')
            isValid = true
        } 
        visaKnapp()
    })
}

const email = document.getElementById('epost')
    
if (email) {
    email.addEventListener('input', () => {
        const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailValidation.test(email.value)) {
            email.classList.add('error')
            isValid = false
        } else {
            email.classList.remove('error')
            isValid = true
        }
        visaKnapp()
    })
}

const telefon = document.getElementById('tlf')

if (telefon) {
    telefon.addEventListener('input', () => {
        const phonePattern = /^[+\d-]*\d+[+\d-]*$/
        const onlyDigitsAndSymbols = /^[+\d-]+$/
    
        if (telefon.value.trim().length < 9 || telefon.value.trim().length > 15 || !onlyDigitsAndSymbols.test(telefon.value.trim()) 
            || !phonePattern.test(telefon.value.trim())) {
            telefon.classList.add('error') 
            isValid = false            
        } else {
            telefon.classList.remove('error')
            isValid = true
        }
        visaKnapp()
    })
}

const meddelande = document.getElementById('msg')

if(meddelande){
    meddelande.addEventListener('input', () => {
        if(meddelande.value.trim().length === 201){
            meddelande.classList.add('error') 
            isValid = false          
        }else{
            meddelande.classList.remove('error')
            isValid = true
        }
        visaKnapp()
    })
}







