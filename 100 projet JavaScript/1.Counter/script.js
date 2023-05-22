const numbers = document.querySelectorAll('.number');

numbers.forEach(num => {
    const incrementCounter = ()=>{
        const target_number = +num.getAttribute('data-target-number');
        const current_number = parseInt(num.innerText);
    

        if(current_number < target_number){
            num.innerText = Math.floor(current_number + target_number / 100)
            setTimeout(incrementCounter, 10);
        }else {
            num.innerText = target_number.toLocaleString();
        }
    };
    incrementCounter();
    
});


// Tout d'abord, vous sélectionnez tous les éléments avec la classe .number à l'aide de document.querySelectorAll('.number'). Cela retourne une NodeList contenant tous les éléments correspondants.
// Ensuite, vous itérez sur chaque élément de la NodeList à l'aide de forEach.
// À l'intérieur de la boucle forEach, vous définissez une fonction incrementCounter qui effectue l'animation de compteur pour chaque élément.
// À l'intérieur de incrementCounter, vous récupérez la valeur cible du compteur à l'aide de num.getAttribute('data-target-number'). La valeur cible est stockée dans l'attribut data-target-number de chaque élément.
// Vous récupérez également la valeur actuelle du compteur en utilisant parseInt(num.innerText). La valeur actuelle est convertie en nombre entier à l'aide de parseInt.
// Vous vérifiez si la valeur actuelle est inférieure à la valeur cible. Si c'est le cas, vous augmentez la valeur actuelle en ajoutant une fraction de la différence entre la valeur cible et la valeur actuelle à l'aide de Math.floor(current_number + target_number / 100). Cela crée une animation de compteur progressive.
// Ensuite, vous mettez à jour le texte de l'élément avec la nouvelle valeur du compteur en utilisant num.innerText.
// Vous utilisez ensuite setTimeout(incrementCounter, 10) pour rappeler la fonction incrementCounter après un délai de 10 millisecondes. Cela crée une boucle récursive pour continuer l'animation jusqu'à ce que la valeur actuelle atteigne la valeur cible.
// Lorsque la valeur actuelle dépasse ou est égale à la valeur cible, vous mettez à jour le texte de l'élément avec la valeur cible formatée en utilisant target_number.toLocaleString(). Cela formate le nombre avec des séparateurs de milliers pour une meilleure lisibilité.
// Enfin, à l'extérieur de la boucle forEach, vous appelez la fonction incrementCounter pour chaque élément sélectionné, ce qui déclenche l'animation pour chaque compteur.