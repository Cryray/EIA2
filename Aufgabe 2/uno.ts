namespace unocards { 
    interface Cards {
        name: string;
        rot: number;
        gelb: number;
        gruen: number;
        blau: number;
    }
    let c0: Cards = {
        name: "0",
        rot: 1,
        gelb: 1,
        gruen: 1,
        blau: 1,
    }

    let c1: Cards = {
        name: "1",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let c2: Cards = {
        name: "2",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let c3: Cards = {
        name: "3",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let c4: Cards = {
        name: "4",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let c5: Cards = {
        name: "5",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let c6: Cards = {
        name: "6",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let c7: Cards = {
        name: "7",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let c8: Cards = {
        name: "8",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let c9: Cards = {
        name: "9",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let c10: Cards = {
        name: "R",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let c11: Cards = {
        name: "+2",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let c12: Cards = {
        name: "A",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let s1: number = 4; 
    let s2: number = 4; 

    let c: string = ""; 

    let AlleKarten = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12] 
    
    function random(_n: number): number 
    { 
        return Math.floor(Math.random() * Math.floor(_n));
    }



    function placeDiv(_color: string, _n: string, _x: number): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + _x) 

        document.getElementById("a" + _x).innerHTML += _n; 
       
        let s: CSSStyleDeclaration = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = 80 + "px";
        s.height = 130 + "px";
        s.left = (_x + 0.5) * 100 + "px";
        s.bottom = 40 + "px";
        s.borderRadius = 6 + "px";
        


        if (_color == "#000000") { //schwarz
            s.color = "white";
        }

        if (_color == "#0000ff") { //Blau
            s.color = "white";
        }
    }


    
    function main(): void {
        let z: number;
        let i: string = prompt("Wie viele Karten pro Spieler?");
        z = Number(i);
        for (let d: number = 0; d < z; d++) { 
            let l: number = random(15); 
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
                    let r: number = random(4); 
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
        function Stapel(_n: number): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);

            let s: CSSStyleDeclaration = div.style;
            s.border = "thin solid black";
            s.position = "absolute";
            s.backgroundColor = "#f0f0f0";
            s.width = 50 + "px";
            s.height = 130 + "px";
            s.left = (_n + 0.5) * 20 + "px";
            s.top = (_n + 0.5) * 10 + "px";
            s.borderRadius = 5 + "px";
        }

        function Ablage(): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablage")

            document.getElementById("Ablage").innerHTML += "Ablage";

            let s: CSSStyleDeclaration = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "white";
            s.width = 70 + "px";
            s.height = 150 + "px";
            s.right = 50 + "px";
            s.top = 20 + "px";
        }

        for (let i: number = 0; i < 3; i++) {
            Stapel(i);
        }

        Ablage();
    }
       
    document.addEventListener('DOMContentLoaded',main);
}
