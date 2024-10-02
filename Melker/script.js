const app = Vue.createApp({
  data () {
    return {
      projects: [],
      searchQuery: '',
      currentSort: '',
    };
  },
  computed: {
    filteredProjects() { //filtrering av projekt
      let filtered = this.projects;

      if (this.searchQuery) {
        filtered = filtered.filter(project => 
          project.namn.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          project.kund.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      if (this.currentSort) {
        filtered = filtered.sort((a, b) => {
          if (a[this.currentSort].toLowerCase() < b[this.currentSort].toLowerCase()) {
            return -1;
          } else if (a[this.currentSort].toLowerCase() > b[this.currentSort].toLowerCase()) {
            return 1;
          } else {
            return 0;
          }
        });
      }
      return filtered;
    }
  },
  async mounted () {
    try {
      const response = await fetch('./data.json');
      const data = await response.json();
      this.projects = data;
    } catch (error) {
      console.error('Error: ', error);
    }
  },
  methods: {
    sortBy(field) {
      this.currentSort = field;
    },
    projektUrl(projektvue) {
      return projektvue.id;
    }
  },
});

app.mount('#app');



//sidomeny
document.getElementById("hamburger").addEventListener("click", function() {
    const navLi = document.getElementById("nav-li");
    navLi.classList.toggle("active");
    document.body.classList.toggle("menu-open");
})

const menyLink = document.querySelectorAll('.nav-container ul li a');

menyLink.forEach(link => {
    link.addEventListener('click', function() {
        const navLi = document.getElementById("nav-li")
        navLi.classList.remove("active");
        document.body.classList.remove("menu-open");
    })
})


//bildspel
let currentIndex = 0;
const slides = document.getElementsByClassName('bild')

showSlide(currentIndex);


function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  
  if (index >= slides.length) { 
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  }

  slides[currentIndex].classList.add('active') 
}

function bytSlide(step) { 
  currentIndex += step;
  showSlide(currentIndex);
}



//kontakt
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


fullName.addEventListener('input', () => {
    const onlyAplhabet = /^[a-zA-Z\s\u00C0-\u00FF]+$/
    if (fullName.value.length <= 2 || !onlyAplhabet.test(fullName.value)) {
        fullName.classList.add('error') 
        nameValid = false   
    } else {
        fullName.classList.remove('error')
        nameValid = true
    } 
    kontrollBtn()
})


    
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


//scroll animering
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));
