var partie_lancee = 0;
function touche(event){
    var touche = event.keyCode;
    var nom = String.fromCharCode(touche);
    if (touche == 32 && partie_lancee == 0) {
        partie_lancee = 1;
        nom = 'Espace';
        //alert('Vous avez appuyé sur ' + nom + '\nLe jeu va se lancer');
        window.myGame = new Game();
        window.myGame.start();
    }
    if (touche == 65 && partie_lancee == 1) { // Touche A
        console.log("A");
    }
    if (touche == 90 && partie_lancee == 1) { // Touche Z
        console.log("Z");
    }
    if (touche == 69 && partie_lancee == 1) { // Touche E
        console.log("E");
    }
    if (touche == 82 && partie_lancee == 1) { // Touche R
        console.log("R");
    }
}