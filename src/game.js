class Game{
    canvas;
    tones;
    speed;
    score;
    tailleTones;
    
    constructor(){
        this.canvas = document.querySelector("#gameCanvas");
        this.speed = 20;
        this.tones = [];
        this.tailleTones = 30;
    }

    start(){
        for(let i =0; i < 6; i++){
            this.tones[i] = new Tone(this,this.tailleTones,i,-(this.tailleTones*(i+1)),'rgba(5,5,5,1)');
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
                tone.destroy();
                this.myGame.generateTones();
            } else {
                tone.newPosition(tone.y+1);
                tone.update();
            }
        });
        this.myGame.interface();
    }

    generateTones(){
        let col = Math.floor(Math.random() * 4);
        this.tones.push(new Tone(this,this.tailleTones,col,-this.tailleTones,'rgba(5,5,5,1)'));
    }

    interface(){
        this.canvas.getContext("2d").fillStyle = 'rgba(0,0,0,1)';
        this.canvas.getContext("2d").fillRect(0, this.canvas.height-20, this.canvas.width,1);
    }

}