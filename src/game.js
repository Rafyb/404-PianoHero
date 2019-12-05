class Game{
    canvas;
    tones;
    speed;
    score;
    
    constructor(){
        this.canvas = document.querySelector("#gameCanvas");
        this.speed = 20;
        this.tones = [];
    }

    start(){
        for(let i =0; i < 5; i++){
            this.tones[i] = new Tone(this,i,'#361');
        }
        let intervalId = setInterval(this.update, 30);
    }

    clear() {
        this.canvas.getContext("2d").clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    update(){
        this.myGame.clear();
        this.myGame.tones.forEach(tone => {
            if(tone.y >= this.myGame.canvas.height){
                tone.newPosition(tone.y=-(tone.height));
            }
            tone.newPosition(tone.y+1);
            tone.update();
        });
    }

}