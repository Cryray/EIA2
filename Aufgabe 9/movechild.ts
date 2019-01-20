namespace Aufgabe10 {
    export class child {
         x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        
         draw(): void {
             crc2.fillStyle = "#000000";
            crc2.fillRect(20, 400, 8, -18);
            crc2.beginPath();
            crc2.arc(22.5, 380, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(39, 411, 4, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(10, 395);
            crc2.lineTo(40, 414);
            crc2.closePath();
            crc2.stroke();     
        }
        move(): void {

            if (this.y > 700) {
                this.y = 200;
                this.x = 100;
            }

            this.x += - 4;
            this.y += 2;
            this.draw();


          
        }



    }

}