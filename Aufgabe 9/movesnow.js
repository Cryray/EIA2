var Aufgabe10;
(function (Aufgabe10) {
    class Snow {
        move() {
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
        draw() {
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.strokeStyle = "#FFFFFF";
            Aufgabe10.crc2.lineWidth = 7;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.Snow = Snow;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=movesnow.js.map