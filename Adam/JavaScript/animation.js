//skapar en ny IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){ //ifall ett element är i viewporten
            entry.target.classList.add('show') //lägg till klassen som får det att komma in från vänster
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.scroll') 
elements.forEach((el) => observer.observe(el)) //observar alla element med klassen scroll, vilket är varje grid element 1-4

//skapar en till intersectionobserver för att animera skillbarsen varje gång de är synliga i viewporten
const skillsObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('animateScrollSkill')
        }else{
            entry.target.classList.remove('animateScrollSkill')
        }
    })
}, {
    threshold: 0.5 //börja köra när 50% av elementet är i viewporten
})

const skillBars = document.querySelectorAll('.kompetens')
skillBars.forEach((el) => skillsObserver.observe(el))



