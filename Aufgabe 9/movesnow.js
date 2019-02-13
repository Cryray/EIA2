var Inheritance_Rodelhang;
(function (Inheritance_Rodelhang) {
    class Snow extends Inheritance_Rodelhang.DrawObject {
        constructor() {
            super();
            this.xP = Math.random() * 500;
            this.yP = Math.random() * 700;
        }
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
            Inheritance_Rodelhang.crc2.fillStyle = this.color;
            Inheritance_Rodelhang.crc2.strokeStyle = "#FFFFFF";
            Inheritance_Rodelhang.crc2.lineWidth = 7;
            Inheritance_Rodelhang.crc2.beginPath();
            Inheritance_Rodelhang.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);
            Inheritance_Rodelhang.crc2.closePath();
            Inheritance_Rodelhang.crc2.fill();
            Inheritance_Rodelhang.crc2.stroke();
        }
    }
    Inheritance_Rodelhang.Snow = Snow;
})(Inheritance_Rodelhang || (Inheritance_Rodelhang = {}));
//# sourceMappingURL=movesnow.js.map