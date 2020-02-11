namespace rodelbahn {

    export class food {
        x: number;
        y: number;
        timer: number = 0;
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            crc2.fillStyle = "#000000"; /*FFD8BE*/
            crc2.fill();
            this.timer--;
            console.log(this.x, this.y)
        }
    }

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

            }
        }
        checkIfHit(_x: number, _y: number): boolean {

            crc2.lineWidth = 50;
            crc2.beginPath();
            crc2.moveTo(_x - 20, _y);
            crc2.arc(_x + 30, _y - 50, 60, 0, 10 * Math.PI);
            crc2.closePath();


            if (crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    export class base {
        x: number;
        y: number;
        color: string;
        move(): void { }
        draw(): void { }
    }

    export class movement extends base {
        dx: number;
        dy: number;
        move(): void {
            this.y += this.dy;
            this.x += this.dx;
        }
    }



    export class BirdDown extends movement {
        state: string;
        target: food = null;
        setTarget(givenTarget: food): void {
            this.target = givenTarget;
        }
        removeTarget() {
            this.target = null;
        }
        draw(): void {
            if (this.state == "ridedown") {
                this.drawBird1();
            }
            if (this.state == "dead") {
                this.drawBird2();
            }

        }



        drawBird2(): void {
            /*
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
            */
        }

        drawBird1(): void {

            crc2.beginPath();
            crc2.arc(this.x + 25, this.y - 50, 13, 0, 2 * Math.PI);
            crc2.fillStyle = "#000000"; /*FFD8BE*/
            crc2.fill();
            crc2.lineWidth = .2;
            crc2.strokeStyle = "#A57658";
            crc2.stroke();

            crc2.arc(this.x + 15, this.y - 35, 13, 0, 2 * Math.PI);
            crc2.fillStyle = "#000000"; /*FFD8BE*/
            crc2.fill();
            crc2.lineWidth = .2;
            crc2.strokeStyle = "#A57658";
            crc2.stroke();

            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x + 30, this.y - 40);
            crc2.lineTo(this.x + 45, this.y - 40);
            crc2.lineTo(this.x + 25, this.y - 65);



            crc2.fill();
            
        }


        move(): void {

            if (this.target == null) {
                this.x += this.dx;
                this.y += this.dy;
            }else{
                if(this.target.x != this.x || this.target.y != this.y){
                    if (this.x > this.target.x){
                        this.x = this.x - this.dx;
                    }
                    else if(this.x < this.target.x){
                        this.x = this.x + this.dx;
                    }
                    if(this.y > this.target.y){
                        this.y = this.y - this.dx;
                    }
                    else if(this.y < this.target.y){
                        this.y = this.y + this.dx;
                    }
                }
            }
        }

        getSpeed(): number {
            return Math.floor(this.dx * this.dy * -1 * 200);
        }

    }

}