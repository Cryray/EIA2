var zauberbild;
(function (zauberbild) {
    class BaseGraphic {
        constructor() {
            this.widthVar = 1;
            this.heigthVar = 1;
            this.colorVar = BaseGraphic.standardColor;
            this.nameVar = "Grafik";
            this.animationVar = "NoAnimation";
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
        set width(newWidth) {
            this.widthVar = newWidth;
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
        set animation(newAnimation) {
            this.animationVar = newAnimation;
        }
        get animation() {
            return this.animationVar;
        }
        animate(crc2) {
            switch (this.animation) {
                case "NoAnimation": break;
                case "Colorswitch":
                    this.color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
                    break;
                case "MoveRight":
                    if (this.x > crc2.canvas.width) {
                        this.x = 0;
                    }
                    else {
                        this.x = this.x + 1 + (this.width * BaseGraphic.standardSize) / 2;
                    }
                    break;
                default: return;
            }
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
            this.animate(crc2);
            crc2.save();
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y, this.width * BaseGraphic.standardSize, this.heigth * BaseGraphic.standardSize);
            crc2.restore();
        }
        highlight(crc2) {
            crc2.strokeStyle = "#ff0000";
            crc2.lineWidth = 5;
            crc2.strokeRect(this.x, this.y, this.width * BaseGraphic.standardSize, this.heigth * BaseGraphic.standardSize);
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 1;
        }
    }
    zauberbild.Rectangle = Rectangle;
    class Circle extends BaseGraphic {
        constructor() {
            super();
        }
        draw(crc2) {
            this.animate(crc2);
            // draw your object
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.width * BaseGraphic.standardSize, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.restore();
        }
        highlight(crc2) {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.width * BaseGraphic.standardSize, 0, 2 * Math.PI);
            crc2.strokeStyle = "#ff0000";
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 1;
        }
    }
    zauberbild.Circle = Circle;
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=grafiken.js.map