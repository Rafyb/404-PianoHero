class Tone{
    ctx;
    width;
    height;
    x;
    y;

    constructor(gameContext,colonne,color){
        this.ctx = gameContext.canvas.getContext("2d");
        this.width = 100;
        this.height = 30;
        this.y = -(this.height);
        this.x = 100*colonne;
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
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }
    
}