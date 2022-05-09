/*
Idées

- Modif html dans le DOM
- Compteur de morts avec curseur actualisé
- Boucle for pour les articles
- animation ? 
- fonction qui créé tableau avec les carac des boss ?
- button avec chiffre aléatoire qui donne un boss/jeu au piff 

*/

//Le compteur de mort lui même
var deathCount = document.createElement("div");
deathCount.classList.add("deathCounter");
deathCount.innerHTML = '<input type="range" name="deathCountRange" class= "deathCount" min="0" max="100" value="0"></input>&nbsp;<span class="deathCountValue">0</span></br><label for="deathCountRange"></label><button class="deathCountButton"> Combien de morts poto ? </button><br>';

//Ajout des compteurs sur les articles
var parentList  = document.querySelectorAll(".article");
parentList.forEach(function (child) {
    child.appendChild(deathCount.cloneNode(true));
});


//L'event change des compteurs
function deathCursorChange(targetElement) {
    var deathCountNumber = targetElement.value;
    var deathCountSpan = targetElement.nextElementSibling;
    deathCountSpan.textContent = deathCountNumber;
}

//Attribution des events sur les compteurs des articles
document.querySelectorAll(".article .deathCounter").forEach(function (el) {
    el.querySelector(".deathCount").addEventListener("input", function(event) {
        deathCursorChange(event.target);
    })
    el.querySelector(".deathCount").addEventListener("change", function(event) {
        deathCursorChange(event.target);
    });
    el.querySelector(".deathCountButton").addEventListener("click", function(event) {
        deathCountButtonBehavior(event.target); //si on veut afficher le nombre, il faut un event.target
    });
});

function deathCountButtonBehavior(targetElement) {
    var deathCountElement = targetElement.parentNode.querySelector(".deathCount");
    alert("Coucou, tu es mort " + (deathCountElement.value ?? 0) + " fois !");
}
