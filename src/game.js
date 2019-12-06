class Game{
    
    constructor(){
        this.canvas = document.querySelector("#gameCanvas");
        this.speed = 10;
        this.tones = [];
        this.tailleTones = 100;
        console.log(this.canvas);
        this.UI = new Interface(this.canvas);
    }

    start(){
        for(let i =0; i < 4; i++){
            this.tones[i] = new Tone(this,this.tailleTones,i,-(this.tailleTones*(i+1)),'rgba(5,5,5,1)');
        }
        for(let i=0; i < 3; i++){
            this.generateTones()
        }
        this.intervalId = setInterval(this.update, this.speed);
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
                tone.newPosition(tone.y+5);
                tone.update();
            }
        });
        this.myGame.UI.draw();
    }

    generateTones(){
        let col = Math.floor(Math.random() * 4);
        this.tones.push(new Tone(this,this.tailleTones,col,this.tones[this.tones.length-1].y-this.tailleTones,'rgba(5,5,5,1)'));
    }

    detectionTone(column) {
        this.tones.forEach(tone => {
            if (tone.col == column) {
                if (tone.activate == true) {
                    tone.destroy();
                    this.generateTones();
                }
            }
        });
    }

    active(touche){
        this.UI.active(touche);
    }

    lose() {
        if (confirm("Vous avez perdu !\n\nRecommencer la partie ?")) {
            window.partie_lancee = 0;
        } else {
            history.back();
        }
    }

}