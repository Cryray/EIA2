var rodelbahn;
(function (rodelbahn) {
    window.addEventListener("load", showMenu);
    let snowflakes = [];
    let birdsDown = [];
    let snowballs = [];
    let score = 0;
    let timer = 60;
    let corn = new rodelbahn.food();
    let fps = 30;
    let imgData;
    function showMenu() {
        document.getElementById("play").addEventListener("click", init);
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("manual").addEventListener("click", showManual);
        document.getElementById("score").style.display = "none";
        document.getElementById("manualMenu").style.display = "none";
        document.getElementById("menu").style.display = "initial";
        document.getElementById("highscoresButton").addEventListener("click", highscores);
        document.getElementById("highscoreList").style.display = "none";
    }
    function showManual() {
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("manualMenu").style.display = "initial";
        document.getElementById("back").addEventListener("click", showMenu);
        document.getElementById("highscoreList").style.display = "none";
    }
    function showEndscreen() {
        document.getElementById("finalScore").innerText = score.toString();
        document.getElementById("finalScore").setAttribute("value", score.toString());
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("endscreen").style.display = "initial";
        document.getElementsByTagName("body")[0].addEventListener("change", handleChange);
        document.getElementById("sendButton").addEventListener("click", sendRequestWithCustomData);
    }
    function highscores() {
        document.getElementById("finalScore").innerText = score.toString();
        document.getElementById("finalScore").setAttribute("value", score.toString());
        console.log(document.getElementById("finalScore"));
        document.getElementsByTagName("body")[0].addEventListener("change", handleChange);
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("highscoreList").style.display = "initial";
        document.getElementById("highscores").style.display = "initial";
    }
    function init(_event) {
        score = 0;
        timer = 60;
        document.getElementById("score").style.display = "initial";
        let canvas = document.getElementsByTagName("canvas")[0];
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("highscoreList").style.display = "none";
        rodelbahn.crc2 = canvas.getContext("2d");
        drawSky();
        drawSun();
        drawBirdhouse();
        gernerateTrees();
        gernerateTrees2();
        drawCloud1();
        drawCloud2();
        imgData = rodelbahn.crc2.getImageData(0, 0, 700, 1100);
        generateSnow();
        generateBirdDown();
        for (let i = 0; i < 6; i++) {
            createBird();
        }
        update();
        var mouse_x;
        var mouse_y;
        function mouseUpdate(e) {
            mouse_x = e.clientX;
            mouse_y = e.clientY;
            //  console.log(mouse_x,mouse_y);
        }
        function spawnFood(e) {
            var radius = 200;
            if (e.keyCode == 32) {
                console.log(mouse_x, mouse_y);
                corn.timer = Math.floor(Math.random() * 100 + 20);
                corn.x = mouse_x;
                corn.y = mouse_y;
            }
            rodelbahn.crc2.lineWidth = 50;
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(corn.x, corn.y);
            rodelbahn.crc2.arc(corn.x - Math.cos(45), corn.y - Math.sin(45), radius, 0, 2 * Math.PI);
            rodelbahn.crc2.closePath();
            for (var i = 0; i < birdsDown.length; i++) {
                let bird = birdsDown[i];
                if (rodelbahn.crc2.isPointInPath(bird.x, bird.y)) {
                    bird.setTarget(corn);
                }
            }
        }
        canvas.addEventListener('mousemove', mouseUpdate);
        window.addEventListener('keydown', spawnFood);
        canvas.addEventListener("click", throwSnowball);
    }
    ///////////////////////////////DRAW FUNCTIONS//////////////////////////////////////
    function drawBirdhouse() {
        console.log("Birdhouse");
        //Stamm
        rodelbahn.crc2.beginPath();
        rodelbahn.crc2.moveTo(+390, +800);
        rodelbahn.crc2.lineTo(400 + 10, 600 + 200);
        rodelbahn.crc2.lineTo(400 + 10, 600 + 0);
        rodelbahn.crc2.lineTo(400 - 10, 600 + 0);
        rodelbahn.crc2.closePath();
        rodelbahn.crc2.fillStyle = "rosybrown";
        rodelbahn.crc2.fill();
        //Kasten
        rodelbahn.crc2.beginPath();
        rodelbahn.crc2.moveTo(350, +500);
        rodelbahn.crc2.lineTo(400 + 50, 600 - 100);
        rodelbahn.crc2.lineTo(400 + 50, 600 + 0);
        rodelbahn.crc2.lineTo(400 - 50, 600 + 0);
        rodelbahn.crc2.closePath();
        rodelbahn.crc2.fillStyle = "red";
        rodelbahn.crc2.fill();
        //Dach
        rodelbahn.crc2.beginPath();
        rodelbahn.crc2.moveTo(400 - 70, 600 - 100);
        rodelbahn.crc2.lineTo(400 + 0, 600 - 150);
        rodelbahn.crc2.lineTo(400 + 70, 600 - 100);
        rodelbahn.crc2.closePath();
        rodelbahn.crc2.fillStyle = "black";
        rodelbahn.crc2.fill();
        //Eingang
        let eingangLoch = new Path2D;
        eingangLoch.arc(400 + 0, 600 - 50, 20, 0, 2 * Math.PI);
        rodelbahn.crc2.fillStyle = "black";
        rodelbahn.crc2.fill(eingangLoch);
    }
    function drawSun() {
        var gradient = rodelbahn.crc2.createRadialGradient(300, 80, 10, 238, 5, 300);
        gradient.addColorStop(0, "#F9DB0B");
        gradient.addColorStop(0.5, "#F4BF0B");
        gradient.addColorStop(1, "#F9DB0B");
        let centerX = 170;
        let centerY = 75;
        let radius = 40;
        rodelbahn.crc2.beginPath();
        rodelbahn.crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        rodelbahn.crc2.fillStyle = gradient;
        rodelbahn.crc2.fill();
    }
    function drawSky() {
        rodelbahn.crc2.moveTo(0, 350);
        rodelbahn.crc2.beginPath();
        rodelbahn.crc2.lineTo(700, 700);
        rodelbahn.crc2.lineTo(700, 0);
        rodelbahn.crc2.lineTo(0, 0);
        rodelbahn.crc2.lineTo(0, 350);
        rodelbahn.crc2.closePath();
        var grd = rodelbahn.crc2.createLinearGradient(0, 0, 700, 1110);
        grd.addColorStop(0, "#1AD9E4");
        grd.addColorStop(1, "#178FDA");
        rodelbahn.crc2.fillStyle = grd;
        rodelbahn.crc2.fill();
    }
    function drawCloud1() {
        rodelbahn.crc2.beginPath();
        rodelbahn.crc2.arc(50, 220, 45, 0, 2 * Math.PI);
        rodelbahn.crc2.arc(120, 220, 70, 0, 2 * Math.PI);
        rodelbahn.crc2.arc(190, 220, 45, 0, 2 * Math.PI);
        rodelbahn.crc2.fillStyle = "#FFFFFF";
        rodelbahn.crc2.fill();
    }
    function drawCloud2() {
        rodelbahn.crc2.beginPath();
        rodelbahn.crc2.arc(470, 180, 20, 0, 2 * Math.PI);
        rodelbahn.crc2.arc(510, 180, 40, 0, 2 * Math.PI);
        rodelbahn.crc2.arc(570, 180, 70, 0, 2 * Math.PI);
        rodelbahn.crc2.arc(630, 180, 40, 0, 2 * Math.PI);
        rodelbahn.crc2.arc(670, 180, 20, 0, 2 * Math.PI);
        rodelbahn.crc2.fillStyle = "#FFFFFF";
        rodelbahn.crc2.fill();
    }
    function drawTrees(_x, _y) {
        rodelbahn.crc2.beginPath();
        rodelbahn.crc2.moveTo(_x - 10, _y + 70);
        rodelbahn.crc2.lineTo(_x + 10, _y + 70);
        rodelbahn.crc2.lineTo(_x + 7, _y - 0);
        rodelbahn.crc2.closePath();
        rodelbahn.crc2.fillStyle = "#61390D";
        rodelbahn.crc2.fill();
        rodelbahn.crc2.beginPath();
        rodelbahn.crc2.moveTo(_x - 30, _y + 50);
        rodelbahn.crc2.lineTo(_x, _y - 20);
        rodelbahn.crc2.lineTo(_x + 30, _y + 50);
        rodelbahn.crc2.closePath();
        rodelbahn.crc2.fillStyle = "#10610D";
        rodelbahn.crc2.fill();
    }
    ////////////////////////////////////UPDATE FUNCTION///////////////////////////////////////////////
    function update() {
        rodelbahn.crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1000 / fps);
        if (corn.timer > 0) {
            corn.draw();
            if (corn.timer < 1) {
                for (let i = 0; i < birdsDown.length; i++) {
                    birdsDown[i].removeTarget();
                }
            }
        }
        //console.log(körner.timer);
        if (snowballs.length > 25) {
            console.log("Spiel Ende");
            showEndscreen();
        }
        for (let i = 0; i < snowflakes.length; i++) {
            let snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw();
        }
        for (let i = 0; i < birdsDown.length; i++) {
            birdsDown[i].move();
            birdsDown[i].draw();
            if (birdsDown[i].x < -10 || birdsDown[i].y > (rodelbahn.crc2.canvas.height + 10)) {
                birdsDown.splice(i, 1);
                createBird();
            }
        }
        document.getElementById("score").innerText = score.toString();
        for (let i = 0; i < snowballs.length; i++) {
            if (snowballs[i].timer > 0) {
                snowballs[i].draw();
            }
            else {
                if (snowballs[i].timer == 0) {
                    snowballs[i].draw();
                    for (let i2 = 0; i2 < birdsDown.length; i2++) {
                        console.log(snowballs.length + rodelbahn.BirdDown.length);
                        if (snowballs[i].checkIfHit(birdsDown[i2].x, birdsDown[i2].y) == true && birdsDown[i2].state == "ridedown") {
                            birdsDown[i2].state = "dead";
                            score += birdsDown[i2].getSpeed();
                            console.log("score:" + score);
                        }
                    }
                }
            }
        }
    }
    ///////////////////////////////////////////GENERATE FUNCTIONS//////////////////////////////////////////////////
    function createBird() {
        let bird = new rodelbahn.BirdDown();
        bird.x = 0;
        bird.y = Math.random() * 1100 + 300;
        bird.dx = (Math.random() + 1) * 3;
        bird.dy = (Math.random() + 1) * 2;
        bird.state = "ridedown";
        birdsDown.push(bird);
    }
    function gernerateTrees() {
        for (let i = 0; i < 8; i++) {
            let x = 40 + Math.random() * 200;
            let y = 800 + Math.random() * 200;
            drawTrees(x, y);
        }
    }
    function gernerateTrees2() {
        for (let i = 0; i < 4; i++) {
            let x = 550 + Math.random() * 150;
            let y = 600 + Math.random() * 150;
            drawTrees(x, y);
        }
    }
    function generateSnow() {
        for (let i = 0; i < 500; i++) {
            let snowflake = new rodelbahn.Snow();
            snowflake.xPos = Math.random() * 700;
            snowflake.yPos = Math.random() * 1100;
            snowflake.draw();
            snowflakes.push(snowflake);
        }
    }
    function generateBirdDown() {
        for (let i = 0; i < 6; i++) {
            let bird = new rodelbahn.BirdDown();
            bird.x = Math.random() * 1000;
            bird.y = Math.random() * 250 + 400;
            bird.draw();
            birdsDown.push(bird);
        }
    }
    function throwSnowball(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let ball = new rodelbahn.snowball();
        ball.x = x;
        ball.y = y;
        ball.timer = 25;
        snowballs.push(ball);
    }
    /////////////////////////////SERVER AND DATABASE FUNCTIONS/////////////////////////////////////////////////
    function handleChange(_event) {
        let target = _event.target;
        target.setAttribute("value", target.value);
    }
    let address = "https://githubcryray.herokuapp.com/";
    function sendRequestWithCustomData() {
        console.log("requestcustom");
        let xhr = new XMLHttpRequest();
        let sendString = "";
        sendString += "name:" + document.getElementById("textInput").getAttribute("value") + "&" + "score:" + score;
        xhr.open("GET", address + "?" + sendString, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
        highscores();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
})(rodelbahn || (rodelbahn = {}));
//# sourceMappingURL=endabgabe.js.map