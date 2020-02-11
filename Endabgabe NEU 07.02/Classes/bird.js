var rodelbahn;
(function (rodelbahn) {
    class food {
        constructor() {
            this.timer = 0;
        }
        draw() {
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            rodelbahn.crc2.fillStyle = "#000000"; /*FFD8BE*/
            rodelbahn.crc2.fill();
            this.timer--;
            console.log(this.x, this.y);
        }
    }
    rodelbahn.food = food;
    class snowball {
        move() { }
        draw() {
            if (this.timer >= 0) {
                console.log(">=0");
                rodelbahn.crc2.fillStyle = "#D8D8D8";
                rodelbahn.crc2.strokeStyle = "#D8D8D8";
                rodelbahn.crc2.lineWidth = 1;
                rodelbahn.crc2.beginPath();
                rodelbahn.crc2.moveTo(this.x, this.y);
                rodelbahn.crc2.arc(this.x, this.y, ((this.timer * this.timer) / 3) + 15, 0, 2 * Math.PI);
                rodelbahn.crc2.closePath();
                rodelbahn.crc2.fill();
                rodelbahn.crc2.stroke();
                this.timer--;
            }
        }
        checkIfHit(_x, _y) {
            rodelbahn.crc2.lineWidth = 50;
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(_x - 20, _y);
            rodelbahn.crc2.arc(_x + 30, _y - 50, 60, 0, 10 * Math.PI);
            rodelbahn.crc2.closePath();
            if (rodelbahn.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    rodelbahn.snowball = snowball;
    class base {
        move() { }
        draw() { }
    }
    rodelbahn.base = base;
    class movement extends base {
        move() {
            this.y += this.dy;
            this.x += this.dx;
        }
    }
    rodelbahn.movement = movement;
    class BirdDown extends movement {
        constructor() {
            super(...arguments);
            this.target = null;
        }
        setTarget(givenTarget) {
            this.target = givenTarget;
        }
        removeTarget() {
            this.target = null;
        }
        draw() {
            if (this.state == "ridedown") {
                this.drawBird1();
            }
            if (this.state == "dead") {
                this.drawBird2();
            }
        }
        drawBird2() {
            /*
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 55, this.y);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 15);
            crc2.lineTo(this.x + 55, this.y - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 10, this.y);
            crc2.lineTo(this.x + 10, this.y - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 45, this.y);
            crc2.lineTo(this.x + 45, this.y - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();
            */
        }
        drawBird1() {
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.arc(this.x + 25, this.y - 50, 13, 0, 2 * Math.PI);
            rodelbahn.crc2.fillStyle = "#000000"; /*FFD8BE*/
            rodelbahn.crc2.fill();
            rodelbahn.crc2.lineWidth = .2;
            rodelbahn.crc2.strokeStyle = "#A57658";
            rodelbahn.crc2.stroke();
            rodelbahn.crc2.arc(this.x + 15, this.y - 35, 13, 0, 2 * Math.PI);
            rodelbahn.crc2.fillStyle = "#000000"; /*FFD8BE*/
            rodelbahn.crc2.fill();
            rodelbahn.crc2.lineWidth = .2;
            rodelbahn.crc2.strokeStyle = "#A57658";
            rodelbahn.crc2.stroke();
            rodelbahn.crc2.fillStyle = this.color;
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(this.x + 30, this.y - 40);
            rodelbahn.crc2.lineTo(this.x + 45, this.y - 40);
            rodelbahn.crc2.lineTo(this.x + 25, this.y - 65);
            rodelbahn.crc2.fill();
        }
        move() {
            if (this.target == null) {
                this.x += this.dx;
                this.y += this.dy;
            }
            else {
                if (this.target.x != this.x || this.target.y != this.y) {
                    if (this.x > this.target.x) {
                        this.x = this.x - this.dx;
                    }
                    else if (this.x < this.target.x) {
                        this.x = this.x + this.dx;
                    }
                    if (this.y > this.target.y) {
                        this.y = this.y - this.dx;
                    }
                    else if (this.y < this.target.y) {
                        this.y = this.y + this.dx;
                    }
                }
            }
        }
        getSpeed() {
            return Math.floor(this.dx * this.dy * -1 * 200);
        }
    }
    rodelbahn.BirdDown = BirdDown;
})(rodelbahn || (rodelbahn = {}));
//# sourceMappingURL=bird.js.map