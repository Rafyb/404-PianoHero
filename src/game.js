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
        this.tailleTones = 100;
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
                tone.newPosition(tone.y+5);
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
        const ctx = this.canvas.getContext("2d");
        ctx.font = "20px Arial";
        ctx.fillStyle = 'rgba(120,0,0,0.7)';
        ctx.fillRect(5, this.canvas.height-60,90,30);
        ctx.fillStyle = '#FFF';
        ctx.fillText("A", 45, this.canvas.height-38);
        ctx.fillStyle = 'rgba(0,120,0,0.7)';
        ctx.fillRect(105, this.canvas.height-60,90,30);
        ctx.fillStyle = '#FFF';
        ctx.fillText("Z", 145, this.canvas.height-38);
        ctx.fillStyle = 'rgba(120,120,0,0.7)';
        ctx.fillRect(205, this.canvas.height-60,90,30);
        ctx.fillStyle = '#FFF';
        ctx.fillText("E", 245, this.canvas.height-38);
        ctx.fillStyle = 'rgba(0,0,120,0.7)';
        ctx.fillRect(305, this.canvas.height-60,90,30);
        ctx.fillStyle = '#FFF';
        ctx.fillText("R", 345, this.canvas.height-38);
    }

}