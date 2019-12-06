class ScoreBoard{

    constructor(canvas){
        this.canvas = canvas;
        this.score = 0;
        this.combo = 0;
        this.beforeSpeed = 20;
        this.update();
    }

    increaseScore(){
        this.score += (10 * (Math.floor(this.combo / 10)+1));
        this.combo++;
        this.beforeSpeed--;
    }

    breakCombo(){
        this.combo = 0;
        console.log("BREAK");
    }

    update(){
        let ctx = this.canvas.getContext("2d");
        ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        ctx.fillStyle = '#000000';
        ctx.font = "20px Arial";
        ctx.fillText("Score : "+this.score, 10, 50);
    }
}