
const bildspel = document.querySelectorAll(".bilder img");
let bildIndex = 0;

laddaInBild()

function laddaInBild() {
    if(bildspel.length > 0){
        bildspel[bildIndex].classList.add("displaySlide");
    }
}

function visaBild(index){

    bildspel[index].classList.remove("taBort");
    bildspel[index].classList.add("displaySlide");

}

function taBortBild(index){

    bildspel[index].classList.add("taBort");
    
}

function föregåendebild(){

    taBortBild(bildIndex);

    if(bildIndex === 0){
        bildIndex= bildspel.length -1;
        
    }
    else{
        bildIndex--;
        visaBild(bildIndex);

    }
    visaBild(bildIndex);

}

function nästabild(){

    taBortBild(bildIndex);

    if(bildIndex >= bildspel.length-1){
        
        bildIndex = 0;
    }
    else{
        bildIndex++;

    }
    visaBild(bildIndex);
    
}

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('visa');
        }
        else{
            entry.target.classList.remove('visa');
        }
    });
});

const hiddenElements = document.querySelectorAll('.dölj');
hiddenElements.forEach((el) => observer.observe(el));
