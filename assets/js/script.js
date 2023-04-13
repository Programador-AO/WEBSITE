/* #region Funcionalidade para abrir e fechar menu */
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

document.addEventListener('click', (event) => {
    // Verifica se o elemento clicado não faz parte do menu ou dos links do menu
    if (!menu.contains(event.target) && !linksMenu.contains(event.target)) {
        // Remove a classe 'active' do menu e dos links do menu
        menu.classList.remove('active');
        linksMenu.classList.remove('active');
    }
});

/* #endregion */
