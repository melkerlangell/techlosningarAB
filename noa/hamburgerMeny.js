//För mobila enheter meny

//hamburger
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

