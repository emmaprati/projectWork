$(document).ready(function () {
  // Seleziona tutti gli elementi di testo e aggiungi l'animazione
  $('h1, h2, h3, p, span, div').each(function (index) {
    const element = $(this);
    setTimeout(function () {
      element.addClass('fade-in-up');
    }); // Ritardo progressivo per ogni elemento
  });
  document.querySelector('.btn-info .info').addEventListener('click', function () {
    const target = document.querySelector('.introduzione'); // Elemento verso cui scorrere
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset; // Posizione dell'elemento
    const startPosition = window.pageYOffset; // Posizione iniziale
    const duration = 1500; // Durata dello scroll in millisecondi
    let startTime = null;

    function animationScroll(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, targetPosition - startPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animationScroll);
  });
});
