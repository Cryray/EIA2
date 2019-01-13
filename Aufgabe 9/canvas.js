var Aufgabe10;
(function (Aufgabe10) {
    let snowflakes = [];
    let child1 = [];
    let fps = 25;
    let imgData;
    window.addEventListener("load", init);
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.crc2 = canvas.getContext("2d");
        drawSky();
        drawHill();
        drawCloud();
        drawCloud2();
        drawSun();
        drawHuman();
        drawHuman2();
        placeTreeRandom();
        //placeSnowflakeRandom();
        imgData = Aufgabe10.crc2.getImageData(0, 0, 360, 700);
        for (let i = 0; i < 50; i++) {
            let snow = new Aufgabe10.Snow();
            snow.x = Math.random() * Aufgabe10.crc2.canvas.width;
            snow.y = Math.random() * Aufgabe10.crc2.canvas.height;
            snow.dx = Math.random() * 2 + 4;
            snow.color = "#FFFFFF";
            snowflakes.push(snow);
        }
        for (let i = 0; i < 8; i++) {
            let children1 = new Aufgabe10.child();
            children1.x = (Math.random() * Aufgabe10.crc2.canvas.width);
            children1.y = (Math.random() * Aufgabe10.crc2.canvas.height);
            children1.dx = Math.random() * 2 - 4;
            children1.dy = Math.random() * 2 + 4;
            child1.push(children1);
        }
        reload();
    }
    function drawSky() {
        Aufgabe10.crc2.fillStyle = "#A9E2F3";
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 300);
        Aufgabe10.crc2.bezierCurveTo(110, 500, 220, 410, 360, 500);
        Aufgabe10.crc2.lineTo(360, 0);
        Aufgabe10.crc2.lineTo(0, 0);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.lineWidth = 2;
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
    function drawHill() {
        console.log("curve");
        Aufgabe10.crc2.fillStyle = "#ffffff";
        Aufgabe10.crc2.strokeStyle = "#000000";
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 300);
        Aufgabe10.crc2.bezierCurveTo(110, 500, 220, 410, 360, 500);
        Aufgabe10.crc2.lineTo(360, 700);
        Aufgabe10.crc2.lineTo(0, 700);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.lineWidth = 2;
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
    function drawSun() {
        console.log("sun");
        Aufgabe10.crc2.fillStyle = "#FFFF00";
        Aufgabe10.crc2.strokeStyle = "#ffff00";
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(350, 25, 50, 0, 2 * Math.PI);
        Aufgabe10.crc2.fill();
    }
    function drawTree(_x, _y) {
        console.log("Trees", _x, _y);
        Aufgabe10.crc2.fillStyle = "#8A4B08";
        Aufgabe10.crc2.strokeStyle = "#8A4B08";
        Aufgabe10.crc2.lineWidth = 1;
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x + 5, _y + 7.5);
        Aufgabe10.crc2.lineTo(_x - 5, _y + 7.5);
        Aufgabe10.crc2.lineTo(_x - 5, _y - 12.5);
        Aufgabe10.crc2.lineTo(_x + 5, _y - 12.5);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fillStyle = "#0B3B17";
        Aufgabe10.crc2.strokeStyle = "#0B610B";
        Aufgabe10.crc2.lineWidth = 1;
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x - 30, _y - 10);
        Aufgabe10.crc2.lineTo(_x, _y - 55);
        Aufgabe10.crc2.lineTo(_x + 30, _y - 10);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fillStyle = "#0B3B17";
        Aufgabe10.crc2.strokeStyle = "#0B610B";
        Aufgabe10.crc2.lineWidth = 1;
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x - 27, _y - 27.5);
        Aufgabe10.crc2.lineTo(_x, _y - 75);
        Aufgabe10.crc2.lineTo(_x + 27, _y - 27.5);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.stroke();
    }
    function placeTreeRandom() {
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * Aufgabe10.crc2.canvas.width;
            let y = Math.random() * Aufgabe10.crc2.canvas.height;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(0, 300);
            Aufgabe10.crc2.bezierCurveTo(110, 550, 220, 460, 360, 550);
            if (Aufgabe10.crc2.isPointInPath(x, y)) {
                drawTree(x, y);
            }
            else {
                i--;
            }
        }
    }
    var z = 200;
    /* function drawSnow(_x: number, _y: number): void {
           // drawSnow(_x,_y);
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
            _x+= 1;
        }
    function placeSnowflakeRandom(): void {
            console.log("randomJan");
            for (let i: number = 0; i < 35; i++) {
                let x: number = Math.random() * crc2.canvas.width;
                let y: number = Math.random() * crc2.canvas.height;
                drawSnow(x, y);
            }
        }*/
    function drawCloud() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(90, 90);
        Aufgabe10.crc2.arc(85, 90, 17, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(100, 90, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(75, 90, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(90, 85, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#FFFFFF";
        Aufgabe10.crc2.fill();
    }
    function drawCloud2() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(240, 100);
        Aufgabe10.crc2.arc(240, 70, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(233, 63, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(247, 65, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(235, 74, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(225, 73, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#FFFFFF";
        Aufgabe10.crc2.fill();
    }
    function drawHuman() {
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
    function drawHuman2() {
        Aufgabe10.crc2.fillStyle = "#000000";
        Aufgabe10.crc2.fillRect(100, 500, 8, -18);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(102.5, 480, 10, 0, 2 * Math.PI);
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.fillStyle = "#000000";
        Aufgabe10.crc2.arc(119, 511, 4, 0, 2 * Math.PI);
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(90, 495);
        Aufgabe10.crc2.lineTo(120, 514);
        Aufgabe10.crc2.stroke();
    }
    function reload() {
        window.setTimeout(reload, 1000 / fps);
        Aufgabe10.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < snowflakes.length; i++) {
            let snow = snowflakes[i];
            snow.move();
            snow.draw();
        }
        for (let i = 0; i < 5; i++) {
            let children1 = child1[i];
            children1.move();
            children1.draw();
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=canvas.js.map