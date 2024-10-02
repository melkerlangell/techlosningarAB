let bildIndex = 1;
let bilder = document.getElementsByClassName('bilder')

const visaBildNummer = () =>{
    const bildNummer = document.getElementById('nummer-bild')
    bildNummer.textContent = bildIndex+'/'+bilder.length
}


const visaBild = (index) =>{
    if(index > bilder.length){
        bildIndex = 1
    }
    if(index<1){
        bildIndex = bilder.length
    }

    for(let i = 0; i< bilder.length;i++){
        bilder[i].classList.add('döljBild')
        bilder[i].classList.remove('visaBild')
    }

    bilder[bildIndex -1].classList.add('visaBild')
    visaBildNummer()
}

const bytBild = (n) =>{
    visaBild(bildIndex += n)
}

visaBild(bildIndex)