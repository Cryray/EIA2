let crc2: CanvasRenderingContext2D;
 window.addEventListener("load", init);
    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
    
        drawHill();
        drawSky();
        }
function drawHill() {
        console.log("curve");
        crc2.fillStyle = "#ffffff";
        crc2.strokeStyle = "#000000";
        crc2.beginPath();
        crc2.moveTo(0, 300);
        crc2.bezierCurveTo(110, 500, 220, 410, 360, 500);
        crc2.lineTo(700, 700);
        crc2.lineTo(0, 700);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();
    }
function drawSky(): void {

        crc2.fillStyle = "#A9E2F3";
        crc2.beginPath();
        crc2.moveTo(0, 300);
        crc2.bezierCurveTo(110, 500, 220, 410, 360, 500);
        crc2.lineTo(700, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();
    }
function drawBorder():void {
    
        