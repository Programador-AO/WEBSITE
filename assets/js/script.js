var menu = document.querySelector('.menu');
var linksMenu = document.querySelector('.links');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    linksMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll(".nav-link");
const currentUrl = window.location.href;
navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.children[0].href == currentUrl)
        link.classList.add("active");

    link.addEventListener('click', () => {
        menu.classList.remove('active');
        linksMenu.classList.remove('active');
    });
});




