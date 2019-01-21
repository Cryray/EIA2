namespace Inheritance_Rodelhang {

    export class Snow extends DrawObject {
        xD: number;
        yD: number;

        constructor() {
            super();
            this.xP = Math.random() * 500;
            this.yP = Math.random() * 700;
        }

        move(): void {

            this.dy = 3;
            this.dx = Math.random() * 4 + 2;

            this.x += this.dx;
            this.y += this.dy;

            if (this.x > 360) {
                this.x = 0;
            }
            if (this.y > 700) {
                this.y = 0;
                }
            this.draw();
        }


        draw(): void {
            crc2.fillStyle = this.color;
            crc2.strokeStyle = "#FFFFFF";
            crc2.lineWidth = 7;

            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);

            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }
    }
}


