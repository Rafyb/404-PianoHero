var partie_lancee = 0;
function touche(event){
    var touche = event.keyCode;
    if (touche == 32 && partie_lancee == 0) {
        partie_lancee = 1;
        nom = 'Espace';
        //alert('Vous avez appuyé sur ' + nom + '\nLe jeu va se lancer');
        window.myGame = new Game();
        window.myGame.start();
    }
    if(partie_lancee == 1){
        if (touche == 65) { // Touche A
            console.log("A");
            window.myGame.active("A");
        }
        if (touche == 90) { // Touche Z
            console.log("Z");
            window.myGame.active("Z");
        }
        if (touche == 69) { // Touche E
            console.log("E");
            window.myGame.active("E");
        }
        if (touche == 82) { // Touche R
            console.log("R");
            window.myGame.active("R");
        }
    }
}