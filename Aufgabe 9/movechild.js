var Inheritance_Rodelhang;
(function (Inheritance_Rodelhang) {
    class child extends Inheritance_Rodelhang.DrawObject {
        constructor() {
            super();
            this.xP = Math.random() * 75 + 100;
            this.yP = Math.random() * 75 + 400;
        }
        draw() {
            Inheritance_Rodelhang.crc2.fillStyle = "#000000";
            Inheritance_Rodelhang.crc2.fillRect(20, 400, 8, -18);
            Inheritance_Rodelhang.crc2.beginPath();
            Inheritance_Rodelhang.crc2.arc(22.5, 380, 10, 0, 2 * Math.PI);
            Inheritance_Rodelhang.crc2.fill();
            Inheritance_Rodelhang.crc2.beginPath();
            Inheritance_Rodelhang.crc2.fillStyle = "#000000";
            Inheritance_Rodelhang.crc2.arc(39, 411, 4, 0, 2 * Math.PI);
            Inheritance_Rodelhang.crc2.fill();
            Inheritance_Rodelhang.crc2.beginPath();
            Inheritance_Rodelhang.crc2.moveTo(10, 395);
            Inheritance_Rodelhang.crc2.lineTo(40, 414);
            Inheritance_Rodelhang.crc2.closePath();
            Inheritance_Rodelhang.crc2.stroke();
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
    Inheritance_Rodelhang.child = child;
})(Inheritance_Rodelhang || (Inheritance_Rodelhang = {}));
//# sourceMappingURL=movechild.js.map