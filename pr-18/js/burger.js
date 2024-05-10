document.addEventListener('click', function (event) {
    var nav = document.getElementById("nav");
    var burgerMenu = document.getElementById("burger-menu");
    var header = document.querySelector("header");

    if (event.target !== burgerMenu && !burgerMenu.contains(event.target) && !header.contains(event.target)) {
        if (nav.style.display === "block") {
            toggleMenu();
            document.getElementById("headc").classList.remove('open');
        }
    }
});

document.getElementById("burger-menu").addEventListener('click', () => {
    toggleMenu();
    document.getElementById("headc").classList.toggle('open');
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
// Додати перевірку розміру екрана при зміні розширення
window.addEventListener('resize', function () {
    var nav = document.getElementById("nav");
    var screenWidth = window.innerWidth;

    if (screenWidth > 767) { // Змініть це значення на необхідний розмір екрана
        nav.style.display = "none";
        nav.style.animation = "";
        document.getElementById("headc").classList.remove('open');
    }
});
