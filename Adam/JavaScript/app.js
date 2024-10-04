//skapar en instans av Vue
const app = Vue.createApp({
    data(){
        return{
            projects: [], //array för att lagra projekt som läses in från JSON filen
            sokning: '', //variabel för att lagra sökning från input
            sokningAvProjekt: [], //array för att lagra projekt som söks efter
            searchingActive: false, //flagga för att bestämma hur projekten ska visas
        }
    },
    methods:{
        sokningProjects() {
            if (this.sokning === '') { //ifall sökning är tom visas alla projekt
                this.sokningAvProjekt = this.projects
                this.searchingActive = false
            }else{
                this.sokningAvProjekt = [] //tömmer tidigare sökning
                this.projects.forEach(element => {
                    if(element.name.toLowerCase().includes(this.sokning.toLowerCase())){ //kollar ifall något av projektens namn matchar sökningen. Använder includes istället för startsWith för har så lite projekt
                        this.sokningAvProjekt.push(element) //lägg till projektet i den tomma arrayen
                        this.searchingActive = true //ändra flaggan för att ändra utseende
                    }
                })
            }
        },
        filtreringProjects(order){
            this.sokningAvProjekt.sort((a, b) =>{ //använder sort på sökningen av projekt med två projekt som parametrar (a, b)
                if (order === 'fallande'){
                    return a.name.localeCompare(b.name) //använder localComapre för att sortera i alfabetisk ordning där a jämförs med b och beroende på ordningen sorteras ordningen om (A-Ö)
                }else{
                    return b.name.localeCompare(a.name) //motsatsen Ö-A
                }
            })
        }
        
    },
    async mounted() { //när appen mountas
        try{
            const response = await fetch('./data.json') //väntar på att hämta filen
            const data = await response.json() //väntar på att konvertera svaret till json format
            this.projects = data //sparar datan
            this.sokningAvProjekt = data //även i denna för att det inte ska vara tomt när sidan laddas in
        }catch (error) {
            console.error('Error:', error)
        }        
    }
})
app.mount('#app')



