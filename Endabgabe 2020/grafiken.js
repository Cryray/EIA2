var zauberbild;
(function (zauberbild) {
    class BaseGraphic {
        constructor() {
            this.widthVar = 1;
            this.heigthVar = 1;
            this.colorVar = BaseGraphic.standardColor;
            this.nameVar = "Grafik";
            this.idVar = BaseGraphic.idNumber;
            BaseGraphic.idNumber++;
            this.name += this.id;
        }
        get x() {
            return this.xCord;
        }
        set x(newXPos) {
            this.xCord = newXPos - (this.width * BaseGraphic.standardSize) / 2;
        }
        get y() {
            return this.yCord;
        }
        set y(newYPos) {
            this.yCord = newYPos - (this.heigth * BaseGraphic.standardSize) / 2;
        }
        set width(newHeigth) {
            this.widthVar = newHeigth;
        }
        get width() {
            return this.widthVar;
        }
        set heigth(newHeigth) {
            this.heigthVar = newHeigth;
        }
        get heigth() {
            return this.heigthVar;
        }
        get color() {
            return this.colorVar;
        }
        set color(newColor) {
            this.colorVar = newColor;
        }
        get name() {
            return this.nameVar;
        }
        set name(newName) {
            this.nameVar = newName;
        }
        get id() {
            return this.idVar;
        }
    }
    BaseGraphic.idNumber = 1;
    BaseGraphic.standardSize = 50;
    BaseGraphic.standardColor = "#000000";
    zauberbild.BaseGraphic = BaseGraphic;
    class Rectangle extends BaseGraphic {
        constructor() {
            super();
        }
        draw(crc2) {
            crc2.strokeRect(this.x, this.y, this.width * BaseGraphic.standardSize, this.heigth * BaseGraphic.standardSize);
            crc2.fillStyle = this.color;
            crc2.fill();
        }
    }
    zauberbild.Rectangle = Rectangle;
    class Circle extends BaseGraphic {
        constructor() {
            super();
        }
        draw(crc2) {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.width * BaseGraphic.standardSize, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
        }
    }
    zauberbild.Circle = Circle;
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=grafiken.js.map