namespace rodelbahn {
    window.addEventListener("load", showMenu);
   // window.addEventListener("load", init)
    export let crc2: CanvasRenderingContext2D;

    let snowflakes: Snow[] = [];
    let childsDown: ChildDown[] = [];
    let snowballs: snowball[] = [];
    let score: number = 0;

    

    let fps: number = 60;

    let imgData: ImageData;

    function showMenu() {
        document.getElementById("play").addEventListener("click", init);
        }

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        document.getElementsByTagName("div")[0].style.display = "none";
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
        

        update();
       
        canvas.addEventListener("click", throwSnowball);

    }

    function update(): void {
        crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1000 / fps);



        for (let i: number = 0; i < snowflakes.length; i++) {
            let snowflake: Snow = snowflakes[i];
            snowflake.move();
            snowflake.draw();


        }

        for (let i: number = 0; i < childsDown.length; i++) {
            let childd: ChildDown = childsDown[i];
            childd.move();
            childd.draw();
            console.log(childsDown.length);

        }
        for (let i: number = 0; i < snowballs.length; i++) {
            if (snowballs[i].timer > 0) {
                snowballs[i].draw();
                //snowballs[i].checkIfHit(childrenArray[i].x, childrenArray[i].y);
            }
            else {
                if (snowballs[i].timer == 0) {
                    snowballs[i].draw();
                    console.log("timer:" + snowballs[i].timer);
                    for (let i2: number = 0; i2 < childsDown.length; i2++) {
                        console.log("yooo" + ChildDown.length);
                        if (snowballs[i].checkIfHit(childsDown[i2].x, childsDown[i2].y) == true && childsDown[i2].state == "ridedown") {
                            childsDown[i2].state = "dead";
                            score += childsDown[i2].getSpeed() * 10;
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
            childd.color = childd.getRandomColor();
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
  
    
    
    
    
}