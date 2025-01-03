$(document).ready(function () {
    // Seleziona tutti gli elementi di testo e aggiungi l'animazione
    $('h1, h2, h3, p, span, div, form, input, label, a').each(function (index) {
        const element = $(this);
        setTimeout(function () {
            element.addClass('fade-in-up');
        }); // Ritardo progressivo per ogni elemento
    });
});
