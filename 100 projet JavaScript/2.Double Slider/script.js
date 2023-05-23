const sliderContainer = document.querySelector('.container')
const slideLeft = document.querySelector('.left-slide__part')
const slideRight = document.querySelector('.right-slide__part')
const upButton = document.querySelector('.btn_up')
const downButton = document.querySelector('.btn_down')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', ()  => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) =>{
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0
        }
    }else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`

}



// Les premières lignes du code récupèrent différentes éléments du document HTML à l'aide de la méthode document.querySelector() et les assignent à des variables. Ces éléments sont :
// sliderContainer: L'élément de conteneur principal du slider avec la classe CSS "container".
// slideLeft: L'élément de la partie gauche du slider avec la classe CSS "left-slide__part".
// slideRight: L'élément de la partie droite du slider avec la classe CSS "right-slide__part".
// upButton: Le bouton de navigation vers le haut avec la classe CSS "btn_up".
// downButton: Le bouton de navigation vers le bas avec la classe CSS "btn_down".
// La variable slidesLength est définie pour stocker le nombre de diapositives dans la partie droite du slider. Cela est déterminé en utilisant slideRight.querySelectorAll('div').length pour sélectionner tous les éléments div dans la partie droite du slider et compter leur nombre.
// La variable activeSlideIndex est initialisée à 0 pour indiquer que la première diapositive est active au départ.
// La propriété style.top de slideLeft est définie pour déplacer la partie gauche du slider vers le haut, afin que la première diapositive soit alignée avec la partie droite du slider.
// Les écouteurs d'événements sont ajoutés aux boutons de navigation. Lorsque le bouton "up" est cliqué, la fonction changeSlide('up') est appelée, et lorsque le bouton "down" est cliqué, la fonction changeSlide('down') est appelée.
// La fonction changeSlide est définie pour changer la diapositive active en fonction de la direction spécifiée. Si la direction est "up", activeSlideIndex est incrémenté. Si la direction est "down", activeSlideIndex est décrémenté.
// Des vérifications sont effectuées pour s'assurer que activeSlideIndex reste dans la plage valide des index des diapositives. Si activeSlideIndex dépasse le nombre total de diapositives moins 1, il est réinitialisé à 0. Si activeSlideIndex devient inférieur à 0, il est réinitialisé à slidesLength - 1.
// La propriété style.transform de slideRight est utilisée pour déplacer la partie droite du slider vers le haut ou vers le bas, en fonction de la valeur de activeSlideIndex. Cela crée une animation de transition lorsque les diapositives changent.
// La propriété style.transform de slideLeft est également utilisée pour déplacer la partie gauche du slider dans la direction opposée à slideRight, créant ainsi une illusion de mouvement continu.
