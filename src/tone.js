class Tone{
    gameContext;
    ctx;
    width;
    height;
    x;
    y;
    color;

    constructor(gameContext,height,col,debut,color){
        this.gameContext = gameContext;
        this.ctx = gameContext.canvas.getContext("2d");
        this.width = 75;
        this.height = height;
        this.y = debut;
        this.x = this.width*col;
        this.color = color;

        this.update();
    }

    newPosition(decal){
        this.y = decal;
    }

    update(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    destroy(){
        this.gameContext.tones.shift();
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }
    
}