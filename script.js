// Fonction pour basculer la visibilité de l'image en fonction du bouton cliqué
function toggleImage(event) {
  var target = event.target.getAttribute("data-target");
  var image = document.getElementById(target);
  if (image.style.display === "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
}

// Ajouter un gestionnaire d'événement à tous les boutons avec la classe "button"
var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", toggleImage);
}

function toggleGame(event) {
  var target = event.target.getAttribute("data-target");
  var game = document.getElementById(target);
  if (game.style.display === "none") {
    game.style.display = "block";
  } else {
    game.style.display = "none";
  }
}

// Ajoutez un gestionnaire d'événement à tous les boutons "Jouer" avec la classe "button"
var playButtons = document.querySelectorAll(".project .button");
for (var i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener("click", toggleGame);
}

