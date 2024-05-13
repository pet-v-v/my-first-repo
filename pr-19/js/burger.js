document.addEventListener('click', function (event) {
    var nav = document.getElementById("nav");
    var burgerMenu = document.getElementById("burger-menu");
    var header = document.querySelector("header");

    if (event.target !== burgerMenu && !burgerMenu.contains(event.target) && !header.contains(event.target)) {
        if (nav.style.display === "block") {
            toggleMenu();
        }
    }
});

document.getElementById("burger-menu").addEventListener('click', () => {
    toggleMenu();
})

function toggleMenu() {
    var nav = document.getElementById("nav");
    if (nav.style.display === "none") {
        nav.style.display = "block";
        nav.style.animation = "slideDown 0.5s ease forwards";
    } else {
        nav.style.animation = "slideUp 0.5s ease forwards";
        setTimeout(() => {
            nav.style.display = "none";
        });
    }
}

window.addEventListener('resize', function () {
    var nav = document.getElementById("nav");
    var screenWidth = window.innerWidth;

    if (screenWidth > 767) {
        nav.style.display = "none";
        nav.style.animation = "";
    }
});
