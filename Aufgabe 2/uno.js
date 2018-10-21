// Ehrlich gesagt Hilfe von Nicos Code genommen
// Habe den Code durchgelesen und komplett verstanden
// Werde nach der Ampelstufe nach einer alternativ Lösung suchen
var unocards;
(function (unocards) {
    var c0 = {
        name: "0",
        rot: 1,
        gelb: 1,
        gruen: 1,
        blau: 1,
    };
    var c1 = {
        name: "1",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var c2 = {
        name: "2",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var c3 = {
        name: "3",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var c4 = {
        name: "4",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var c5 = {
        name: "5",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var c6 = {
        name: "6",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var c7 = {
        name: "7",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var c8 = {
        name: "8",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var c9 = {
        name: "9",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var c10 = {
        name: "R",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var c11 = {
        name: "+2",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var c12 = {
        name: "A",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    };
    var s1 = 4;
    var s2 = 4;
    var c = "";
    var AlleKarten = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12];
    function random(_n) {
        return Math.floor(Math.random() * Math.floor(_n));
    }
    function placeDiv(_color, _n, _x) {
        var div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + _x);
        document.getElementById("a" + _x).innerHTML += _n;
        var s = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = 80 + "px";
        s.height = 130 + "px";
        s.left = (_x + 0.5) * 100 + "px";
        s.bottom = 40 + "px";
        s.borderRadius = 6 + "px";
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
            if (l == 13 && s1 > 0) {
                c = "#000000";
                s1--;
                placeDiv(c, "+4", d);
                continue;
            }
            else if (l == 13 && s1 <= 0) {
                d--;
                continue;
            }
            else {
                if (l == 14 && s2 > 0) {
                    c = "#000000";
                    s2--;
                    placeDiv(c, "F", d);
                    continue;
                }
                else if (l == 14 && s2 <= 0) {
                    d--;
                    continue;
                }
                else {
                    var r = random(4);
                    switch (r) {
                        case 0:
                            c = "#ff0000"; //rot
                            if (AlleKarten[l].rot > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].rot--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                        case 1:
                            c = "#00ff00"; //grün
                            if (AlleKarten[l].gruen > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].gruen--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                        case 2:
                            c = "#0000ff"; //blau
                            if (AlleKarten[l].blau > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].blau--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                        case 3:
                            c = "#ffff00"; //gelb
                            if (AlleKarten[l].gelb > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].gelb--;
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
})(unocards || (unocards = {}));
//# sourceMappingURL=uno.js.map