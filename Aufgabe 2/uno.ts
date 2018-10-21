let Aussetzen: string;
let Richtungswechsel: string;
let zweiziehen: string;
let plusvier: number;
let farbwechsel: number;





let green: number[]= [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
let greenspecial: string[]= [Aussetzen,Aussetzen,Richtungswechsel,Richtungswechsel,zweiziehen];

let yellow: number[]= [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
let yellowspecial: string[]= [Aussetzen,Aussetzen,Richtungswechsel,Richtungswechsel,zweiziehen];

let red: number[]= [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
let redspecial: string[]= [Aussetzen,Aussetzen,Richtungswechsel,Richtungswechsel,zweiziehen];

let blue: number[]= [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
let bluespecial: string[]= [Aussetzen,Aussetzen,Richtungswechsel,Richtungswechsel,zweiziehen];

let blackcards1: number[]=[plusvier,plusvier,plusvier,plusvier]
let blackcards2: number[]=[farbwechsel,farbwechsel,farbwechsel,farbwechsel]
let colorcards: any[]=[green,yellow,blue,red];
let specialcards: any[]=[greenspecial,yellowspecial,redspecial,bluespecial];


let deck: any[] = [blackcards1,blackcards2,colorcards,specialcards];
let c: string="";
function random(_n:number) {
    return Math.floor(Math.random() * Math.floor(_n));
}
function placeDiv(_color:string, _n:number, _x:number) {
    let div = document.createElement("div");
    document.body.appendChild(div);
    div.setAttribute("id", "a" + _x); 
    let s = div.style;
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
    let z:number;
    let i = prompt("Wie viele Karten pro Spieler?");
    z = Number(i);
    for (let d = 0; d < z; d++) {
        let l = random(15); 
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
                let r = random(4);
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
    function Stapel(_n:number) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let s = div.style;
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
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "Ablage");
        document.getElementById("Ablage").innerHTML += "Ablage";
        let s = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = "white";
        s.width = 70 + "px";
        s.height = 150 + "px";
        s.right = 50 + "px";
        s.top = 20 + "px";
    }
    for (let i = 0; i < 3; i++) {
        Stapel(i);
    }
    Ablage();
}

document.addEventListener('DOMContentLoaded',main)