let bildIndex = 1; //variabel för index 
let bilder = document.getElementsByClassName('bilder') //hämtar alla bilder

const visaBildNummer = () =>{
    const bildNummer = document.getElementById('nummer-bild')
    bildNummer.textContent = bildIndex+'/'+bilder.length //för att visa vilken bild man är på
}


const visaBild = (index) =>{
    if(index > bilder.length){ //ifall indexet blir större än antalet bilder återgå till första bilden
        bildIndex = 1
    }
    if(index<1){ //ifall indexet blir mindre än 1 gå till sista bilden
        bildIndex = bilder.length
    }

    for(let i = 0; i< bilder.length;i++){ //loopa genom alla bilder och dölj dem och ta bort ifall de är synliga
        bilder[i].classList.add('döljBild')
        bilder[i].classList.remove('visaBild')
    }

    bilder[bildIndex -1].classList.add('visaBild') //visar bilden
    visaBildNummer() //visar vilken bild man är på
}

const bytBild = (n) =>{ //kopplas till pilar för att styra bildspelet manuellt
    visaBild(bildIndex += n)
    console.log(bildIndex)
}

visaBild(bildIndex) //visar första bilden