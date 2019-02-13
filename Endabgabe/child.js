var rodelbahn;
(function (rodelbahn) {
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
                console.log(this.timer);
            }
        }
        checkIfHit(_x, _y) {
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.arc(this.x + 25, this.y - 50, 10, 0, 2 * Math.PI);
            rodelbahn.crc2.fill();
            rodelbahn.crc2.lineWidth = .2;
            rodelbahn.crc2.stroke();
            console.log("bum");
            if (rodelbahn.crc2.isPointInPath(this.x, this.y)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    rodelbahn.snowball = snowball;
    /////////////////////////////////////////////////////////////////////
    class baseStats {
        move() { }
        draw() { }
    }
    rodelbahn.baseStats = baseStats;
    class movement extends baseStats {
        move() {
            this.y += this.dy;
            this.x += this.dx;
        }
    }
    rodelbahn.movement = movement;
    /////////////////////////////////////////////////////////////////////    
    class ChildDown extends movement {
        draw() {
            if (this.state == "ridedown") {
                this.drawChild1();
            }
            if (this.state == "dead") {
                this.drawChild2();
            }
        }
        drawChild2() {
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(this.x, this.y);
            rodelbahn.crc2.lineTo(this.x + 55, this.y);
            rodelbahn.crc2.lineWidth = 4;
            rodelbahn.crc2.strokeStyle = "#683737";
            rodelbahn.crc2.stroke();
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(this.x, this.y - 15);
            rodelbahn.crc2.lineTo(this.x + 55, this.y - 15);
            rodelbahn.crc2.lineWidth = 4;
            rodelbahn.crc2.strokeStyle = "#683737";
            rodelbahn.crc2.stroke();
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(this.x + 10, this.y);
            rodelbahn.crc2.lineTo(this.x + 10, this.y - 15);
            rodelbahn.crc2.lineWidth = 4;
            rodelbahn.crc2.strokeStyle = "#683737";
            rodelbahn.crc2.stroke();
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(this.x + 45, this.y);
            rodelbahn.crc2.lineTo(this.x + 45, this.y - 15);
            rodelbahn.crc2.lineWidth = 4;
            rodelbahn.crc2.strokeStyle = "#683737";
            rodelbahn.crc2.stroke();
        }
        drawChild1() {
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.arc(this.x + 25, this.y - 50, 10, 0, 2 * Math.PI);
            rodelbahn.crc2.fillStyle = "#000000"; /*FFD8BE*/
            rodelbahn.crc2.fill();
            rodelbahn.crc2.lineWidth = .2;
            rodelbahn.crc2.strokeStyle = "#A57658";
            rodelbahn.crc2.stroke();
            rodelbahn.crc2.fillStyle = this.color;
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(this.x + 10, this.y - 15);
            rodelbahn.crc2.lineTo(this.x + 45, this.y - 15);
            rodelbahn.crc2.lineTo(this.x + 25, this.y - 40);
            rodelbahn.crc2.fill();
            // DRAW SLATE
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(this.x, this.y);
            rodelbahn.crc2.lineTo(this.x + 55, this.y);
            rodelbahn.crc2.lineWidth = 4;
            rodelbahn.crc2.strokeStyle = "#683737";
            rodelbahn.crc2.stroke();
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(this.x, this.y - 15);
            rodelbahn.crc2.lineTo(this.x + 55, this.y - 15);
            rodelbahn.crc2.lineWidth = 4;
            rodelbahn.crc2.strokeStyle = "#683737";
            rodelbahn.crc2.stroke();
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(this.x + 10, this.y);
            rodelbahn.crc2.lineTo(this.x + 10, this.y - 15);
            rodelbahn.crc2.lineWidth = 4;
            rodelbahn.crc2.strokeStyle = "#683737";
            rodelbahn.crc2.stroke();
            rodelbahn.crc2.beginPath();
            rodelbahn.crc2.moveTo(this.x + 45, this.y);
            rodelbahn.crc2.lineTo(this.x + 45, this.y - 15);
            rodelbahn.crc2.lineWidth = 4;
            rodelbahn.crc2.strokeStyle = "#683737";
            rodelbahn.crc2.stroke();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
        getSpeed() {
            return Math.floor(this.dx * this.dy * -1 * 200);
        }
    }
    rodelbahn.ChildDown = ChildDown;
})(rodelbahn || (rodelbahn = {}));
//# sourceMappingURL=child.js.map