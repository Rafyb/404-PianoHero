class Interface{

    constructor(canvas){
        this.canvas = canvas;
        this.A = "false";
        this.Z = "false";
        this.E = "false";
        this.R = "false";
    }

    draw(){
        let ctx = this.canvas.getContext("2d");
        ctx.font = "20px Arial";
        ctx.fillStyle = 'rgba(120,0,0,0.7)';
        if(this.A == "true")ctx.fillStyle = 'rgba(255,0,0,1)';
        ctx.fillRect(5, this.canvas.height-60,90,30);
        ctx.fillStyle = '#FFF';
        ctx.fillText("A", 45, this.canvas.height-38);
        ctx.fillStyle = 'rgba(0,120,0,0.7)';
        if(this.Z == "true")ctx.fillStyle = 'rgba(0,255,0,1)';
        ctx.fillRect(105, this.canvas.height-60,90,30);
        ctx.fillStyle = '#FFF';
        ctx.fillText("Z", 145, this.canvas.height-38);
        ctx.fillStyle = 'rgba(120,120,0,0.7)';
        if(this.E == "true")ctx.fillStyle = 'rgba(255,255,0,1)';
        ctx.fillRect(205, this.canvas.height-60,90,30);
        ctx.fillStyle = '#FFF';
        ctx.fillText("E", 245, this.canvas.height-38);
        ctx.fillStyle = 'rgba(0,0,120,0.7)';
        if(this.R == "true")ctx.fillStyle = 'rgba(0,0,255,1)';
        ctx.fillRect(305, this.canvas.height-60,90,30);
        ctx.fillStyle = '#FFF';
        ctx.fillText("R", 345, this.canvas.height-38);
    }

    active(touche){
        if(touche == "A") {
            this.A = "true";
            setTimeout(function(){
                window.myGame.UI.A = "false";
            },250);
        }
        if(touche == "Z") {
            this.Z = "true";
            setTimeout(function(){
                window.myGame.UI.Z = "false";
            },250);
        }
        if(touche == "E") {
            this.E = "true";
            setTimeout(function(){
                window.myGame.UI.E = "false";
            },250);
        }
        if(touche == "R") {
            this.R = "true";
            setTimeout(function(){
                window.myGame.UI.R = "false";
            },250);
        }
    }
}