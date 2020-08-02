namespace zauberbild{
    export abstract class BaseGraphic{
        constructor(){
            this.idVar=BaseGraphic.idNumber;
            BaseGraphic.idNumber++;
            this.name += this.id;
        }
        private static idNumber:number = 1;
        private idVar:number;
        protected static standardSize:number = 50;
        private static standardColor:string = "#000000";
        private xCord:number;
        private yCord:number;
        private widthVar:number = 1;
        private heigthVar:number = 1;
        private colorVar:string = BaseGraphic.standardColor;
        private nameVar:string = "Grafik";

        get x():number{
            return this.xCord;
        }
        set x(newXPos:number){
            this.xCord = newXPos - (this.width*BaseGraphic.standardSize)/2;
        }
        get y():number{
            return this.yCord;
        }
        set y(newYPos:number){
            this.yCord = newYPos - (this.heigth*BaseGraphic.standardSize)/2;
        }
        set width(newHeigth:number){
            this.widthVar = newHeigth;
        }
        get width(){
            return this.widthVar;
        }
        set heigth(newHeigth:number){
            this.heigthVar = newHeigth;
        }
        get heigth(){
            return this.heigthVar;
        }
        get color():string{
            return this.colorVar;
        }
        set color(newColor:string){
            this.colorVar = newColor;
        }
        get name():string{
            return this.nameVar;
        }
        set name(newName:string){
            this.nameVar = newName;
        }
        get id(){
            return this.idVar;
        }
        public abstract draw(crc2:CanvasRenderingContext2D): void;
    }
    export class Rectangle extends BaseGraphic{
        constructor() {
            super();
        }

        draw(crc2:CanvasRenderingContext2D): void{

            crc2.save();
           // crc2.rotate(0.17);

            crc2.strokeRect(this.x, this.y,  this.width*BaseGraphic.standardSize, this.heigth*BaseGraphic.standardSize);
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.restore();
        }
    } 
    export class Circle extends BaseGraphic{
        constructor() {
            super();
        }

        draw(crc2:CanvasRenderingContext2D): void {
               
                
                // draw your object

                crc2.beginPath();
                crc2.arc(this.x, this.y, this.width*BaseGraphic.standardSize, 0, 2 * Math.PI);
                crc2.fillStyle = this.color;
                crc2.fill();

                crc2.restore();
                
                    }
    }
 
}