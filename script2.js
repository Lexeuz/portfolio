document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed-text3', {
        strings: ['', 'I am', 'Alexander Eraso Adarme'],
        typeSpeed: 70,
        backSpeed: 30,
        loop: false
    });

    // Retarda la ejecución del segundo script por 2 segundos (2000 ms)
    setTimeout(function() {
        var typed2 = new Typed('#typed-text4', {
            strings: ['', 'a future Computer Engineer Major', 'And', 'a FrontEnd developer'],
            typeSpeed: 70,
            backSpeed: 30,
            loop: false
        });
    }, 4000);
});