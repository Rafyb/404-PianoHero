class Game{
    canvas;
    tones;
    speed;
    score;
    tailleTones;
    A;
    Z;
    E;
    R;
    
    constructor(){
        this.canvas = document.querySelector("#gameCanvas");
        this.speed = 30;
        this.tones = [];
        this.tailleTones = 100;
        this.A = "false";
        this.Z = "false";
        this.E = "false";
        this.R = "false";
    }

    start(){
        for(let i =0; i < 4; i++){
            this.tones[i] = new Tone(this,this.tailleTones,i,-(this.tailleTones*(i+1)),'rgba(5,5,5,1)');
        }
        for(let i=0; i < 3; i++){
            this.generateTones()
        }
        let intervalId = setInterval(this.update, this.speed);
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
        this.tones.push(new Tone(this,this.tailleTones,col,this.tones[this.tones.length-1].y-this.tailleTones,'rgba(5,5,5,1)'));
    }

    interface(){
        const ctx = this.canvas.getContext("2d");
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
                window.myGame.A = "false";
            },250);
        }
        if(touche == "Z") {
            this.Z = "true";
            setTimeout(function(){
                window.myGame.Z = "false";
            },250);
        }
        if(touche == "E") {
            this.E = "true";
            setTimeout(function(){
                window.myGame.E = "false";
            },250);
        }
        if(touche == "R") {
            this.R = "true";
            setTimeout(function(){
                window.myGame.R = "false";
            },250);
        }
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

    lose() {
        this.tones.forEach(tone => {
            tone.destroy();
        });
        if (confirm("Vous avez perdu !\n\nRecommencer la partie ?")) {
            window.partie_lancee = 0;
        } else {
            history.back();
        }
    }

}