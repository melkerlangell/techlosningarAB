
//Bildspelet

var bildspelSrc = document.querySelector(".bildspelSrc");
var bilder = ["img1.avif", "img2.avif", "img3.avif", "img4.avif", "img5.avif"];
var i = 0;

function bak() {
    if (i <= 0) { // Adding curly braces
        i = bilder.length;
    }
    i--;  // Decrement after the check
    return sättBild();
}

function fram() {
    if (i >= bilder.length - 1) {
        i = -1; // Reset to -1 so the next increment brings it to 0
    }
    i++; // Increment to go to the next image
    return sättBild();
}

function sättBild() {
    return bildspelSrc.setAttribute("src", "bildspel/" + bilder[i]);
}

