this.partie_lancee = 0;
function touche(event){
    var touche = event.keyCode;
    if (touche == 32 && partie_lancee == 0) {
        partie_lancee = 1;
        nom = 'Espace';
        window.myGame = new Game();
        window.myGame.start();
    }
    if(partie_lancee == 1){
        if (touche == 65) { // Touche A
            window.myGame.active("A");
            window.myGame.detectionTone(0);
        }
        if (touche == 90) { // Touche Z
            window.myGame.active("Z");
            window.myGame.detectionTone(1);
        }
        if (touche == 69) { // Touche E
            window.myGame.active("E");
            window.myGame.detectionTone(2);
        }
        if (touche == 82) { // Touche R
            window.myGame.active("R");
            window.myGame.detectionTone(3);
        }
    }
}