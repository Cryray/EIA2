namespace rodelbahn {
    window.addEventListener("load", showMenu);
    // window.addEventListener("load", init)
    export let crc2: CanvasRenderingContext2D;

    let snowflakes: Snow[] = [];
    let childsDown: ChildDown[] = [];
    let snowballs: snowball[] = [];
    let score: number = 0;
    let timer: number = 60;



    let fps: number = 30;

    let imgData: ImageData;

    function showMenu() {
        document.getElementById("play").addEventListener("click", init);
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("manual").addEventListener("click", showManual);
        document.getElementById("score").style.display= "none" ;
        document.getElementById("manualMenu").style.display = "none";
        document.getElementById("menu").style.display = "initial";
        document.getElementById("highscoresButton").addEventListener("click", highscores);
        document.getElementById("highscoreList").style.display= "none" ;
    }
    
    function showManual() {
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("score").style.display= "none" ;
        document.getElementById("menu").style.display = "none";
        document.getElementById("manualMenu").style.display = "initial";
        document.getElementById("back").addEventListener("click", showMenu);
        document.getElementById("highscoreList").style.display= "none" ;
        }
    function init(_event: Event): void {
        score = 0;
        timer = 60;
        document.getElementById("score").style.display = "initial";
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("highscoreList").style.display= "none" ;
        crc2 = canvas.getContext("2d");

        drawSky();
        drawSun();
        gernerateTrees();
        gernerateTrees2();
        drawCloud1();
        drawCloud2();
        imgData = crc2.getImageData(0, 0, 700, 1100);
        generateSnow();
        generateChildDown();

        for (let i: number = 0; i < 4; i++) {
            createChild();
        }

        update();

        canvas.addEventListener("click", throwSnowball);


    }
    function endscreen(): void {
        document.getElementById("finalScore").innerText = score.toString();
        document.getElementById("finalScore").setAttribute("value", score.toString());
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("endscreen").style.display = "initial";
        document.getElementsByTagName("body")[0].addEventListener("change", handleChange);

        document.getElementById("sendButton").addEventListener("click", sendRequestWithCustomData);
      //  document.getElementById("retry").style.display = "initial";
     //   document.getElementById("retry").addEventListener("click", init);

       // document.getElementsByTagName("body")[0].addEventListener("change", handleChange);

      //  document.getElementById("button").addEventListener("click", sendRequestWithCustomData);
    }

    function createChild(): void {
        let child: ChildDown = new ChildDown();
        child.x = 0;
        child.y = Math.random() * 1100 + 300;
        child.dx = (Math.random() + 1) * 3;
        child.dy = (Math.random() + 1) * 2;
        child.state = "ridedown";
        childsDown.push(child);
    }

    function update(): void {
        crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1000 / fps);

        if (snowballs.length > 25) {
        console.log("Spiel Ende");
            endscreen()
        }

        for (let i: number = 0; i < snowflakes.length; i++) {
            let snowflake: Snow = snowflakes[i];
            snowflake.move();
            snowflake.draw();


        }

        
        
        /////////////////////////////////
        for (let i: number = 0; i < childsDown.length; i++) {
            childsDown[i].move();
            childsDown[i].draw();
            if (childsDown[i].x < -10 || childsDown[i].y > (crc2.canvas.height + 10)) {
                childsDown.splice(i, 1);
                createChild();
                
            }
        }
        document.getElementById("score").innerText = score.toString();
        //////////////////////////////   
        for (let i: number = 0; i < snowballs.length; i++) {
            if (snowballs[i].timer > 0) {
                snowballs[i].draw();
                
            }
           
            else {
                if (snowballs[i].timer == 0) {
                    snowballs[i].draw();
                   // console.log("timer:" + snowballs[i].timer);
                    for (let i2: number = 0; i2 < childsDown.length; i2++) {
                        console.log(snowballs.length + ChildDown.length);
                        if (snowballs[i].checkIfHit(childsDown[i2].x, childsDown[i2].y) == true && childsDown[i2].state == "ridedown") {
                            childsDown[i2].state = "dead";
                            score += childsDown[i2].getSpeed();
                            console.log("score:" + score);
                        }
                    }
                }
            }
        }
    }


    function drawSun(): void {

        var gradient = crc2.createRadialGradient(300, 80, 10, 238, 5, 300);


        gradient.addColorStop(0, "#F9DB0B");
        gradient.addColorStop(0.5, "#F4BF0B");
        gradient.addColorStop(1, "#F9DB0B");

        let centerX: number = 170;
        let centerY: number = 75;
        let radius: number = 40;

        crc2.beginPath();
        crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

        crc2.fillStyle = gradient;
        crc2.fill();
    }

    function drawSky(): void {

        crc2.moveTo(0, 350);
        crc2.beginPath();

        crc2.lineTo(700, 700);
        crc2.lineTo(700, 0);
        crc2.lineTo(0, 0);
        crc2.lineTo(0, 350);
        crc2.closePath();

        var grd = crc2.createLinearGradient(0, 0, 700, 1110);
        // light blue
        grd.addColorStop(0, "#1AD9E4");
        // dark blue
        grd.addColorStop(1, "#178FDA");
        crc2.fillStyle = grd;
        crc2.fill();


    }

    function drawCloud1(): void {

        crc2.beginPath();
        crc2.arc(50, 220, 45, 0, 2 * Math.PI);
        crc2.arc(120, 220, 70, 0, 2 * Math.PI);
        crc2.arc(190, 220, 45, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }

    function drawCloud2(): void {

        crc2.beginPath();
        crc2.arc(470, 180, 20, 0, 2 * Math.PI);
        crc2.arc(510, 180, 40, 0, 2 * Math.PI);
        crc2.arc(570, 180, 70, 0, 2 * Math.PI);
        crc2.arc(630, 180, 40, 0, 2 * Math.PI);
        crc2.arc(670, 180, 20, 0, 2 * Math.PI);

        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }

    function gernerateTrees(): void {


        for (let i: number = 0; i < 8; i++) {
            let x: number = 40 + Math.random() * 200;
            let y: number = 800 + Math.random() * 200;
            drawTrees(x, y);
        }
    }

    function drawTrees(_x: number, _y: number): void {


        crc2.beginPath();
        crc2.moveTo(_x - 10, _y + 70);
        crc2.lineTo(_x + 10, _y + 70);

        crc2.lineTo(_x + 7, _y - 0);
        crc2.closePath();

        crc2.fillStyle = "#61390D";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x - 30, _y + 50);
        crc2.lineTo(_x, _y - 20);
        crc2.lineTo(_x + 30, _y + 50);
        crc2.closePath();

        crc2.fillStyle = "#10610D";
        crc2.fill();
    }

    function gernerateTrees2(): void {


        for (let i: number = 0; i < 4; i++) {
            let x: number = 550 + Math.random() * 150;
            let y: number = 600 + Math.random() * 150;
            drawTrees(x, y);
        }
    }


    function generateSnow(): void {

        for (let i: number = 0; i < 500; i++) {
            let snowflake: Snow = new Snow();
            snowflake.xPos = Math.random() * 700;
            snowflake.yPos = Math.random() * 1100;

            snowflake.draw();

            snowflakes.push(snowflake);

        }

    }

    function generateChildDown(): void {

        for (let i: number = 0; i < 6; i++) {
            let childd: ChildDown = new ChildDown();
            childd.x = Math.random() * 1000;
            childd.y = Math.random() * 250 + 400;
            //childd.color = childd.getRandomColor();
            childd.draw();

            childsDown.push(childd);

        }
    }

    function throwSnowball(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let ball: snowball = new snowball();
        ball.x = x;
        ball.y = y;
        ball.timer = 25;
        snowballs.push(ball);
    }
function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        target.setAttribute("value", target.value);
    }

    let address: string = "https://githubcryray.herokuapp.com/";

    function sendRequestWithCustomData(): void {
        console.log("requestcustom");
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        let sendString: string = "";
        sendString += "name:" + document.getElementById("textInput").getAttribute("value") + "&" + "score:" + score;

        xhr.open("GET", address + "?" + sendString, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
        highscores();
    }


    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
    function highscores(): void {
        //document.getElementById("endscreen").style.display = "none";
        
        document.getElementById("finalScore").innerText = score.toString();
        document.getElementById("finalScore").setAttribute("value", score.toString());
        console.log(document.getElementById("finalScore"));
       document.getElementsByTagName("body")[0].addEventListener("change", handleChange);
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("highscoreList").style.display = "initial";
           document.getElementById("highscores").style.display = "initial";
    //    document.getElementById("highscoresButton").style.display="initial";
        
        
    }
  //  document.getElementById("score").innerText = score.toString();


}