namespace rodelbahn {

    export class snowball {
        x: number;
        y: number;
        color: string;


        timer: number;
        move(): void { }
        draw(): void {

            if (this.timer >= 0) {
                console.log(">=0");
                crc2.fillStyle = "#D8D8D8";
                crc2.strokeStyle = "#D8D8D8";
                crc2.lineWidth = 1;

                crc2.beginPath();
                crc2.moveTo(this.x, this.y);
                crc2.arc(this.x, this.y, ((this.timer * this.timer) / 3) + 15, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fill();
                crc2.stroke();
                this.timer--;
                console.log(this.timer);
            }
        }
        checkIfHit(_x: number, _y: number): boolean {
            crc2.beginPath();
            crc2.arc(this.x + 25, this.y - 50, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.lineWidth = .2;
            crc2.stroke();



            console.log("bum");
            if (crc2.isPointInPath(this.x, this.y)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    /////////////////////////////////////////////////////////////////////
    export class baseStats {
        x: number;
        y: number;
        color: string;
        move(): void { }
        draw(): void { }
    }

    export class movement extends baseStats {
        dx: number;
        dy: number;
        move(): void {
            this.y += this.dy;
            this.x += this.dx;
        }
    }
    /////////////////////////////////////////////////////////////////////    

    export class ChildDown extends movement {
        state: string;
        draw(): void {
            if (this.state == "ridedown") {
                this.drawChild1();
            }
            if (this.state == "dead") {
                this.drawChild2();
            }

        }
        drawChild2(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 55, this.y);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 15);
            crc2.lineTo(this.x + 55, this.y - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 10, this.y);
            crc2.lineTo(this.x + 10, this.y - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 45, this.y);
            crc2.lineTo(this.x + 45, this.y - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();
        }

        drawChild1(): void {

            crc2.beginPath();
            crc2.arc(this.x + 25, this.y - 50, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#000000"; /*FFD8BE*/
            crc2.fill();
            crc2.lineWidth = .2;
            crc2.strokeStyle = "#A57658";
            crc2.stroke();

            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x + 10, this.y - 15);
            crc2.lineTo(this.x + 45, this.y - 15);
            crc2.lineTo(this.x + 25, this.y - 40);



            crc2.fill();
            // DRAW SLATE
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 55, this.y);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 15);
            crc2.lineTo(this.x + 55, this.y - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 10, this.y);
            crc2.lineTo(this.x + 10, this.y - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 45, this.y);
            crc2.lineTo(this.x + 45, this.y - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();
        }


        move(): void {
            this.x += this.dx;
            this.y += this.dy;

        }

        getSpeed(): number {
            return Math.floor(this.dx * this.dy * -1 * 200);
        }






    }

    /////////////////////////////////////////////////////////////////////
    /*
     export class ChildDown {
         x: number;
         y: number;
         xDir: number;
         yDir: number;
         color: string;
         state: string;
 
         draw(): void {
 // DRAW KIDS
             crc2.beginPath();
             crc2.arc(this.x + 25, this.y - 50, 10, 0, 2 * Math.PI);
             crc2.fillStyle = "#000000";
             crc2.fill();
             crc2.lineWidth = .2;
             crc2.strokeStyle = "#A57658";
             crc2.stroke();
 
             crc2.fillStyle = this.color;
             crc2.beginPath();
             crc2.moveTo(this.x + 10, this.y - 15);
             crc2.lineTo(this.x + 45, this.y - 15);
             crc2.lineTo(this.x + 25, this.y - 40);
 
 
             
             crc2.fill();
 // DRAW SLATE
             crc2.beginPath();
             crc2.moveTo(this.x, this.y);
             crc2.lineTo(this.x + 55, this.y);
 
             crc2.lineWidth = 4;
             crc2.strokeStyle = "#683737";
             crc2.stroke();
 
             crc2.beginPath();
             crc2.moveTo(this.x, this.y - 15);
             crc2.lineTo(this.x + 55, this.y - 15);
 
             crc2.lineWidth = 4;
             crc2.strokeStyle = "#683737";
             crc2.stroke();
 
             crc2.beginPath();
             crc2.moveTo(this.x + 10, this.y);
             crc2.lineTo(this.x + 10, this.y - 15);
 
             crc2.lineWidth = 4;
             crc2.strokeStyle = "#683737";
             crc2.stroke();
 
             crc2.beginPath();
             crc2.moveTo(this.x + 45, this.y);
             crc2.lineTo(this.x + 45, this.y - 15);
 
             crc2.lineWidth = 4;
             crc2.strokeStyle = "#683737";
             crc2.stroke();
            
 
         }
     getSpeed(): number {
             return Math.floor(this.xDir * this.yDir * -1 * 200);
         }
     
         move(): void {
 
             this.yDir = 4;
             this.xDir = 5;
 
             this.x += this.xDir;
             this.y += this.yDir;
 
             if (this.x > 750) {
                 this.x = -60;
                 this.y = Math.random() * 250 + 400;
             }
 
         }
 
         getRandomColor(): string {
             var r: string = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
             var g: string = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
             var b: string = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
             return "#" + r + g + b;
         }
     
 
 }
     */
}