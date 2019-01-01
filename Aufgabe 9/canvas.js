let crc2;
window.addEventListener("load", init);
function init(_event) {
    let canvas = document.getElementsByTagName("canvas")[0];
    crc2 = canvas.getContext("2d");
    drawSky();
    drawHill();
    drawSun();
    placeTreeRandom();
    placeSnowflakeRandom();
}
function drawSky() {
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
    crc2.strokeStyle = "#ffff00";
    crc2.beginPath();
    crc2.arc(350, 25, 50, 0, 2 * Math.PI);
    crc2.fill();
}
function drawTree(_x, _y) {
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
function placeTreeRandom() {
    for (let i = 0; i < 5; i++) {
        let x = Math.random() * crc2.canvas.width;
        let y = Math.random() * crc2.canvas.height;
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
function drawSnowflake(_x, _y) {
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
function placeSnowflakeRandom() {
    console.log("randomJan");
    for (let i = 0; i < 35; i++) {
        let x = Math.random() * crc2.canvas.width;
        let y = Math.random() * crc2.canvas.height;
        drawSnowflake(x, y);
    }
}
//# sourceMappingURL=canvas.js.map