var toque = document.querySelector('.menu');
function rolar() {
    if (toque.getAttribute('class') == 'menu') {
        document.querySelector('.line1').setAttribute('class', 'line1 ativo3');
        document.querySelector('.line3').setAttribute('class', 'line3 ativo');
        document.querySelector('.line2').setAttribute('class', 'line2 ativo2');
        document.getElementById('opc').setAttribute('class', 'tudo');
        toque.setAttribute('class', 'menu vol')
    } else {
        document.querySelector('.line1').setAttribute('class', 'line1');
        document.querySelector('.line3').setAttribute('class', 'line3');
        document.querySelector('.line2').setAttribute('class', 'line2');
        toque.setAttribute('class', 'menu')
        document.getElementById('opc').setAttribute('class', '');
    }
}

const navLinks = document.querySelectorAll(".nav-link");
const currentUrl = window.location.href;

navLinks.forEach(link => {
    link.classList.remove("active");

    // Adicione a classe "active" apenas ao link clicado
    if (link.children[0].href == currentUrl)
        link.classList.add("active");
});




