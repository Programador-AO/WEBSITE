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