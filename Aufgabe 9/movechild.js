var Aufgabe10;
(function (Aufgabe10) {
    class child {
        draw() {
            Aufgabe10.crc2.fillStyle = "#000000";
            Aufgabe10.crc2.fillRect(20, 400, 8, -18);
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(22.5, 380, 10, 0, 2 * Math.PI);
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "#000000";
            Aufgabe10.crc2.arc(39, 411, 4, 0, 2 * Math.PI);
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(10, 395);
            Aufgabe10.crc2.lineTo(40, 414);
            Aufgabe10.crc2.stroke();
        }
        move() {
            if (this.y > 700) {
                this.y = 200;
                this.x = 100;
            }
            this.x += -4;
            this.y += 2;
            this.draw();
        }
    }
    Aufgabe10.child = child;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=movechild.js.map