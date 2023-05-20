const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');

  
arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll('img').length;
    const totalImages = 4; // Nombre d'images affichées à la fois
  
    arrow.addEventListener('click', function() {
      clickCounter++;
  
      // Réinitialise le compteur de clics si toutes les images ont été défilées
      if (clickCounter >= imageItem - totalImages + 1) {
        clickCounter = 0;
        movieLists[i].style.transform = 'translateX(0)';
      } else {
        movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get('transform')[0].x.value - 300}px)`;
      }
    });
  });
  
  

