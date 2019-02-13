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
                crc2.fillStyle = "#ffffff";
                crc2.strokeStyle = "#ffffff";
                crc2.lineWidth = 1;

                crc2.beginPath();
                crc2.moveTo(this.x, this.y);
                crc2.arc(this.x, this.y, ((this.timer * this.timer) / 3) + 15, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fill();
                crc2.stroke();
                this.timer--;
                //console.log (this.timer);
            }
}
        checkIfHit(_x: number, _y: number): boolean {
            crc2.lineWidth = 50;
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x - 7, _y + 2);
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x - 6, _y + 4);
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 15);
            crc2.arc(_x, _y - 15, 2, 0, 2 * Math.PI);
            crc2.moveTo(_x, _y - 10);
            crc2.lineTo(_x - 6, _y + 2);
            crc2.moveTo(_x, _y - 12);
            crc2.lineTo(_x - 7, _y - 2);
            crc2.moveTo(_x + 8, _y + 5);
            crc2.lineTo(_x - 10, _y + 7);
            crc2.moveTo(_x + 4, _y + 6);
            crc2.lineTo(_x + 3, _y + 12);
            crc2.moveTo(_x - 6, _y + 7);
            crc2.lineTo(_x - 8, _y + 14);
            crc2.moveTo(_x + 8, _y + 12);
            crc2.lineTo(_x - 10, _y + 15);
            crc2.closePath();
            console.log("bum");
            if (crc2.isPointInStroke(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
    }

        
    export class ChildDown {
        x: number;
        y: number;
        xDir: number;
        yDir: number;
        color: string;
        state: string;

        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x + 25, this.y - 50, 10, 0, 2 * Math.PI, false);
            crc2.fillStyle = "#FFD8BE";
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

}