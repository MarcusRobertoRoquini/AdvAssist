document.addEventListener("DOMContentLoaded", function() {
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true
    });

    document.querySelector('.hero button').addEventListener('click', function() {
        scroll.animateScroll(document.querySelector('#mais-informacoes'));
    });
});