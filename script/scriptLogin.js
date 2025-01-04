
$(document).ready(function () {
    // Seleziona tutti gli elementi di testo e aggiungi l'animazione
    animationScroll();
  });
  
  function animationScroll() {
    $('h1, h2, h3, p, span, div').each(function (index) {
      const element = $(this);
      setTimeout(function () {
        element.addClass('fade-in-up');
      }); // Ritardo progressivo per ogni elemento
    });
  }
