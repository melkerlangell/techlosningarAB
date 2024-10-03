const app = Vue.createApp({
    data() {
        return {
            projekt: [], 
            söktext: '', 
        };
    },

    
    computed: {
        filtreradeProjekt() {
            
            if (this.söktext === '') {
                return this.projekt;
            }
            return this.projekt.filter(info =>
                info.Projekt.toLowerCase().startsWith(this.söktext.toLowerCase())
            );
        }
    },

    methods:{
        sorteraProjekt() {
            this.projekt.sort((a, b) => {
                return a.Projekt.localeCompare(b.Projekt);
            });
        }

    },

    async mounted() {
        try {
            const response = await fetch('./data.json'); 
            const data = await response.json(); 
            this.projekt = data;
        } catch (error) {
            console.error('Fel:', error);
        }
    }
});

app.mount('.projekten');