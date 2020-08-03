namespace zauberbild {
    export abstract class BaseGraphic {
        constructor() {
            this.idVar = BaseGraphic.idNumber;
            BaseGraphic.idNumber++;
            this.name += this.id;
        }
        private static idNumber: number = 1;
        private idVar: number;
        public static standardSize: number = 50;
        private static standardColor: string = "#000000";
        private xCord: number;
        private yCord: number;
        private widthVar: number = 1;
        private heigthVar: number = 1;
        private colorVar: string = BaseGraphic.standardColor;
        private nameVar: string = "Grafik";
        private animationVar: string = "NoAnimation";

        get x(): number {
            return this.xCord;
        }
        set x(newXPos: number) {
            this.xCord = newXPos - (this.width * BaseGraphic.standardSize) / 2;
        }
        get y(): number {
            return this.yCord;
        }
        set y(newYPos: number) {
            this.yCord = newYPos - (this.heigth * BaseGraphic.standardSize) / 2;
        }
        set width(newWidth: number) {
            this.widthVar = newWidth;
        }
        get width() {
            return this.widthVar;
        }
        set heigth(newHeigth: number) {
            this.heigthVar = newHeigth;
        }
        get heigth() {
            return this.heigthVar;
        }
        get color(): string {
            return this.colorVar;
        }
        set color(newColor: string) {
            this.colorVar = newColor;
        }
        get name(): string {
            return this.nameVar;
        }
        set name(newName: string) {
            this.nameVar = newName;
        }
        get id() {
            return this.idVar;
        }
        set animation(newAnimation: string) {
            this.animationVar = newAnimation;
        }
        get animation() {
            return this.animationVar;
        }
        public abstract draw(crc2: CanvasRenderingContext2D): void;
        public abstract highlight(crc2: CanvasRenderingContext2D): void;
        public animate(crc2: CanvasRenderingContext2D): void {
            switch (this.animation) {
                case "NoAnimation": break;
                case "Colorswitch": this.color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
                    break;
                case "MoveRight":
                    if (this.x > crc2.canvas.width) {
                        this.x = 0;
                    } else {
                        this.x = this.x + 1 + (this.width * BaseGraphic.standardSize) / 2;
                    }
                    break;
                default: return;

            }
        }
    }
    export class Rectangle extends BaseGraphic {
        constructor() {
            super();
        }

        draw(crc2: CanvasRenderingContext2D): void {
            this.animate(crc2);
            crc2.save();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y, this.width * BaseGraphic.standardSize, this.heigth * BaseGraphic.standardSize);

            crc2.restore();
        }
        highlight(crc2: CanvasRenderingContext2D): void {
            crc2.strokeStyle = "#ff0000";
            crc2.lineWidth = 5;
            crc2.strokeRect(this.x, this.y, this.width * BaseGraphic.standardSize, this.heigth * BaseGraphic.standardSize);
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 1;
        }
    }
    export class Circle extends BaseGraphic {
        constructor() {
            super();
        }

        draw(crc2: CanvasRenderingContext2D): void {
            this.animate(crc2);

            // draw your object

            crc2.beginPath();
            crc2.arc(this.x, this.y, this.width * BaseGraphic.standardSize, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.restore();

        }
        highlight(crc2: CanvasRenderingContext2D): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.width * BaseGraphic.standardSize, 0, 2 * Math.PI);
            crc2.strokeStyle = "#ff0000";
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 1;
        }



    }
}
