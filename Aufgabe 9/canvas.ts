let crc2: CanvasRenderingContext2D;
 window.addEventListener("load", init);
    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawSky();
        drawHill();
        drawCloud();
        drawCloud2();
        drawSun();
        drawHuman();
        drawHuman2();
        placeTreeRandom();
        placeSnowflakeRandom();
        
    }
function drawSky(): void {

        crc2.fillStyle = "#A9E2F3";
        crc2.beginPath();
        crc2.moveTo(0, 300);
        crc2.bezierCurveTo(110, 500, 220, 410, 360, 500);
        crc2.lineTo(360, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();

    }
function drawHill() {
        console.log("curve");
        crc2.fillStyle = "#ffffff";
        crc2.strokeStyle = "#000000";
        crc2.beginPath();
        crc2.moveTo(0, 300);
        crc2.bezierCurveTo(110, 500, 220, 410, 360, 500);
        crc2.lineTo(360, 700);
        crc2.lineTo(0, 700);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();
    }
function drawSun() {
        console.log("sun");
        crc2.fillStyle = "#FFFF00";
        crc2.strokeStyle ="#ffff00";
        crc2.beginPath();
        crc2.arc(350, 25, 50, 0, 2 * Math.PI);
        crc2.fill();
    }
 function drawTree(_x: number, _y: number): void {
        console.log("Trees", _x, _y);

        crc2.fillStyle = "#8A4B08";
        crc2.strokeStyle = "#8A4B08";
        crc2.lineWidth = 1;

        crc2.beginPath();
        crc2.moveTo(_x + 5, _y + 7.5);
        crc2.lineTo(_x - 5, _y + 7.5);
        crc2.lineTo(_x - 5, _y - 12.5);
        crc2.lineTo(_x + 5, _y - 12.5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "#0B3B17";
        crc2.strokeStyle = "#0B610B";
        crc2.lineWidth = 1;

        crc2.beginPath();
        crc2.moveTo(_x - 30, _y - 10);
        crc2.lineTo(_x, _y - 55);
        crc2.lineTo(_x + 30, _y - 10);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "#0B3B17";
        crc2.strokeStyle = "#0B610B";
        crc2.lineWidth = 1;

        crc2.beginPath();
        crc2.moveTo(_x - 27, _y - 27.5);
        crc2.lineTo(_x, _y - 75);
        crc2.lineTo(_x + 27, _y - 27.5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
 function placeTreeRandom(): void {
        for (let i: number = 0; i < 5; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            crc2.beginPath();
            crc2.moveTo(0, 300);
            crc2.bezierCurveTo(110, 550, 220, 460, 360, 550);

            if (crc2.isPointInPath(x, y)) {
                drawTree(x, y);
            }
            else {
                i--;
            }
        }
    }
 function drawSnow(_x: number, _y: number): void {
        crc2.fillStyle = "#E0F8F7";
        crc2.strokeStyle = "#E0F8F7";
        crc2.lineWidth = 1;

        crc2.beginPath();
        crc2.moveTo(_x - 2, _y + 1);
        crc2.lineTo(_x, _y - 2);
        crc2.lineTo(_x + 2, _y + 1);
        crc2.closePath();

        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(_x - 2, _y - 1);
        crc2.lineTo(_x + 2, _y - 1);
        crc2.lineTo(_x, _y + 2);
        crc2.closePath();

        crc2.fill();
        crc2.stroke();
    }
function placeSnowflakeRandom(): void {
        console.log("randomJan");
        for (let i: number = 0; i < 35; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            drawSnow(x, y);
        }
    }
 function drawCloud(): void {
         crc2.beginPath();
        crc2.moveTo(90, 90);
        crc2.arc(85, 90, 17, 0, 2 * Math.PI);
        crc2.arc(100, 90, 20, 0, 2 * Math.PI);
        crc2.arc(75, 90, 20, 0, 2 * Math.PI);
        crc2.arc(90, 85, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
function drawCloud2(): void {
        crc2.beginPath();
        crc2.moveTo(240, 100);
        crc2.arc(240, 70, 20, 0, 2 * Math.PI);
        crc2.arc(233, 63, 20, 0, 2 * Math.PI);
        crc2.arc(247, 65, 20, 0, 2 * Math.PI);
        crc2.arc(235, 74, 20, 0, 2 * Math.PI);
        crc2.arc(225, 73, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
function drawHuman(): void {
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
            crc2.stroke();     
        }
function drawHuman2(): void {
            crc2.fillStyle = "#000000";
            crc2.fillRect(100, 500, 8, -18);
            crc2.beginPath();
            crc2.arc(102.5, 480, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(119, 511, 4, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(90, 495);
            crc2.lineTo(120, 514);
            crc2.stroke();     
        }