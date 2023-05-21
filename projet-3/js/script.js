const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');



arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll('img').length;
  
  arrow.addEventListener('click', function() {
    const widthRatio = Math.floor(window.innerWidth / 300)
    clickCounter++;
    // Réinitialise le compteur de clics si toutes les images ont été défilées
    if (imageItem - (4 + clickCounter) +(4 - widthRatio ) >=0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get('transform')[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)"
      // clickCounter=0;
    }
  });
});

//   // Dark mode start //
const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.navbar,.sidebar,.sidebar i,.movie-list-filter,.movie-list-container,.toggle,.toggle-ball,.movie-list-filter select');

ball.addEventListener("click", function(){
  items.forEach((item) => item.classList.toggle('active'));
});

   // Dark mode end//
  
  

