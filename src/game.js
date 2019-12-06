class Game{
    
    constructor(){
        this.canvas = document.querySelector("#gameCanvas");
        this.speed = 5;
        this.tones = [];
        this.tailleTones = 100;
        console.log(this.canvas);
        this.UI = new Interface(this.canvas);
        this.score = new ScoreBoard(document.querySelector("#scoreCanvas"));
    }

    start(){
        for(let i =0; i < 4; i++){
            this.tones[i] = new Tone(this,this.tailleTones,i,-(this.tailleTones*(i+1)),'rgba(5,5,5,1)');
        }
        for(let i=0; i < 3; i++){
            this.generateTones()
        }
        this.myAudio = new Audio('./sound/piano.wav');
        this.myAudio.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
        this.myAudio.play();
        this.intervalId = setInterval(this.update, 30);
    }

    clear() {
        this.canvas.getContext("2d").clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    update(){
        this.myGame.clear();
        this.myGame.tones.forEach(tone => {
            if(tone.y >= this.myGame.canvas.height){
                clearInterval(this.myGame.intervalId);
                this.myGame.clear();
                this.myGame.lose();
            } else {
                tone.newPosition(tone.y+this.myGame.speed);
                tone.update();
            }
        });
        this.myGame.UI.draw();
        if(this.myGame.score.beforeSpeed == 0){
            this.myGame.score.beforeSpeed=20;
            this.myGame.speed++;
        }
    }

    generateTones(){
        let col = Math.floor(Math.random() * 4);
        this.tones.push(new Tone(this,this.tailleTones,col,this.tones[this.tones.length-1].y-this.tailleTones,'rgba(5,5,5,1)'));
    }

    detectionTone(column) {
        this.tones.forEach(tone => {
            if (tone.col == column && tone.activate == true) {
                    tone.destroy();
                    this.generateTones();
                    this.score.increaseScore();
                    this.score.update();
            } else {
                //this.score.breakCombo();
                this.score.update();

            }
        });
    }

    active(touche){
        this.UI.active(touche);
    }

    lose() {
        this.myAudio.pause();
        if (confirm("Vous avez perdu !\n\nVotre score : "+this.score.score+" \n\nRecommencer la partie ?")) {
            window.partie_lancee = 0;
        } else {
            history.back();
        }
    }

}