class Tone{


    constructor(gameContext,height,col,debut,color){
        this.gameContext = gameContext;
        this.ctx = gameContext.canvas.getContext("2d");
        this.width = 100;
        this.height = height;
        this.y = debut;
        this.x = this.width*col;
        this.color = color;
        this.col = col;
        this.activate = false;
        this.update();
    }

    newPosition(decal){
        this.y = decal;
    }

    isActivate(){
        let haut_y = this.gameContext.canvas.height - 60;
        let bas_y = this.gameContext.canvas.height - 30;
        if ((this.y + this.height) >= haut_y && this.y <= bas_y) {
            return true;
        } else {
            return false;
        }
    }

    update(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.activate = this.isActivate();
    }

    destroy(){
        this.gameContext.tones.shift();
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }
    
}