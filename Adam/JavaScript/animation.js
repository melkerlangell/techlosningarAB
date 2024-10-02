const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.scroll')
elements.forEach((el) => observer.observe(el))


const skillsObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('animateScrollSkill')
        }else{
            entry.target.classList.remove('animateScrollSkill')
        }
    })
}, {
    threshold: 0.5
})

const skillBars = document.querySelectorAll('.kompetens')
skillBars.forEach((el) => skillsObserver.observe(el))



