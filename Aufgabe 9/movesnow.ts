namespace Aufgabe10 {
    export class Snow {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

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


