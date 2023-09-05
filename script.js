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

