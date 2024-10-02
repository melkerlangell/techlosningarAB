const app = Vue.createApp({
    data(){
        return{
            projects: [],
            sokning: '',
            sokningAvProjekt: [],
            searchingActive: false,
        }
    },
    methods:{
        sokningProjects() {
            if (this.sokning === '') {
                this.sokningAvProjekt = this.projects
                this.searchingActive = false
            }else{
                this.sokningAvProjekt = []
                this.projects.forEach(element => {
                    if(element.name.toLowerCase().includes(this.sokning.toLowerCase())){
                        this.sokningAvProjekt.push(element)
                        this.searchingActive = true
                    }
                })
            }
        },
        filtreringProjects(order){
            this.sokningAvProjekt.sort((a, b) =>{
                if (order === 'fallande'){
                    return a.name.localeCompare(b.name)
                }else{
                    return b.name.localeCompare(a.name)
                }
            })
        }
        
    },
    async mounted() {
        try{
            const response = await fetch('./data.json')
            const data = await response.json()
            this.projects = data
            this.sokningAvProjekt = data
        }catch (error) {
            console.error('Error:', error)
        }        
    }
})
app.mount('#app')



