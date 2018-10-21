var Aussetzen;
var Richtungswechsel;
var zweiziehen;
var plusvier;
var farbwechsel;
var green = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
var greenspecial = [Aussetzen, Aussetzen, Richtungswechsel, Richtungswechsel, zweiziehen];
var yellow = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
var yellowspecial = [Aussetzen, Aussetzen, Richtungswechsel, Richtungswechsel, zweiziehen];
var red = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
var redspecial = [Aussetzen, Aussetzen, Richtungswechsel, Richtungswechsel, zweiziehen];
var blue = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
var bluespecial = [Aussetzen, Aussetzen, Richtungswechsel, Richtungswechsel, zweiziehen];
var blackcards1 = [plusvier, plusvier, plusvier, plusvier];
var blackcards2 = [farbwechsel, farbwechsel, farbwechsel, farbwechsel];
var colorcards = [green, yellow, blue, red];
var specialcards = [greenspecial, yellowspecial, redspecial, bluespecial];
var deck = [blackcards1, blackcards2, colorcards, specialcards];
var c = "";
function random(_n) {
    return Math.floor(Math.random() * Math.floor(_n));
}
function placeDiv(_color, _n, _x) {
    var div = document.createElement("div");
    document.body.appendChild(div);
    div.setAttribute("id", "a" + _x);
    var s = div.style;
    s.border = "thin solid black";
    s.textAlign = "center";
    s.position = "absolute";
    s.backgroundColor = _color;
    s.width = 50 + "px";
    s.height = 130 + "px";
    s.left = (_x + 0.5) * 100 + "px";
    s.bottom = 40 + "px";
    s.borderRadius = 5 + "px";
    if (_color == "#000000") {
        s.color = "white";
    }
    if (_color == "#0000ff") {
        s.color = "white";
    }
}
function main() {
    var z;
    var i = prompt("Wie viele Karten pro Spieler?");
    z = Number(i);
    for (var d = 0; d < z; d++) {
        var l = random(15);
        if (l == 13 && plusvier > 0) {
            c = "#000000";
            plusvier--;
            placeDiv(c, plusvier, d);
            continue;
        }
        else if (l == 13 && plusvier <= 0) {
            d--;
            continue;
        }
        else {
            if (l == 14 && farbwechsel > 0) {
                c = "#000000";
                farbwechsel--;
                placeDiv(c, farbwechsel, d);
                continue;
            }
            else if (l == 14 && farbwechsel <= 0) {
                d--;
                continue;
            }
            else {
                var r = random(4);
                switch (r) {
                    case 0:
                        c = "#ff0000"; //rot
                        if (deck[l].red > 0) {
                            placeDiv(c, deck[l].name, d);
                            deck[l].red--;
                            continue;
                        }
                        else {
                            d--;
                            continue;
                        }
                    case 1:
                        c = "#00ff00";
                        if (deck[l].green > 0) {
                            placeDiv(c, deck[l].name, d);
                            deck[l].green--;
                            continue;
                        }
                        else {
                            d--;
                            continue;
                        }
                    case 2:
                        c = "#0000ff";
                        if (deck[l].blue > 0) {
                            placeDiv(c, deck[l].name, d);
                            deck[l].blue--;
                            continue;
                        }
                        else {
                            d--;
                            continue;
                        }
                    case 3:
                        c = "#ffff00";
                        if (deck[l].yellow > 0) {
                            placeDiv(c, deck[l].name, d);
                            deck[l].yellow--;
                            continue;
                        }
                        else {
                            d--;
                            continue;
                        }
                }
            }
        }
    }
    function Stapel(_n) {
        var div = document.createElement("div");
        document.body.appendChild(div);
        var s = div.style;
        s.border = "thin solid black";
        s.position = "absolute";
        s.backgroundColor = "#f0f0f0";
        s.width = 50 + "px";
        s.height = 130 + "px";
        s.left = (_n + 0.5) * 20 + "px";
        s.top = (_n + 0.5) * 10 + "px";
        s.borderRadius = 5 + "px";
    }
    function Ablage() {
        var div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "Ablage");
        document.getElementById("Ablage").innerHTML += "Ablage";
        var s = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = "white";
        s.width = 70 + "px";
        s.height = 150 + "px";
        s.right = 50 + "px";
        s.top = 20 + "px";
    }
    for (var i_1 = 0; i_1 < 3; i_1++) {
        Stapel(i_1);
    }
    Ablage();
}
document.addEventListener('DOMContentLoaded', main);
//# sourceMappingURL=uno.js.map