const app = Vue.createApp({
    data() {
        return {
            projektLista: [], // Tom array för att lagra hämtade projekt
            seProjekt: false, // Flagga för att visa/dölja projekt
            seKnapp: true //knappen kan ses vid true
        };
    },
    methods: {
        // Metod för att hämta data från JSON-filen
        getProjects() {
            axios.get("personligSida.json")
                .then((response) => {
                    this.projektLista = response.data;  // Spara den hämtade datan i projektLista
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);  // Felhantering
                });
        },

        visaProjekt() {
            this.seKnapp = false; //döljer knappen
            this.seProjekt = true; //sätter false till true, projekten kan ses

            if (this.seProjekt) {  // om det är true:
                this.getProjects();  // Hämta projekten endast om showProjects är true
            }
        }
    }

});

app.mount('#app');

