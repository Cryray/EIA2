
interface karte {
    color:string;
    wert:number;
    index:number;
}
var karteen:any = [];
function Karte(pIndex:number , pColor:string, pWert:string[]) { //Karten-Objekt
    this.index = pIndex;
    this.color = pColor;
    this.wert = pWert;
}

function StapelErstellen() {
    var farben = ["rot", "grün", "gelb", "blau"];
    var karte: string;
    var index = 0;

    //reguläre Karten
    while(farben.length != 0) {
        var werte:string[] = ["0", "1", "2", "3", "4","5", "6", "7", "8", "9", "Richtungswechsel", "Aussetzen"];
        var farbe = farben.pop();
        
        while(werte.length != 0) {
            var werte2:string = werte.pop();
            var j:number; //da jede Karte 2 mal vorhanden
            for(var j=0; j < 2; j++) {
                if(j===1 && werte2 == "0") { // außer der "0" ;)
                    break;
                } else {
                    var tmp = Karte (index,farbe, werte);
                    karteen.push(tmp);
                    index++;
                }
            }
        }
    }
    
    //Sonderkarten
    for(var k=0; k < 8; k++) {
        var Farbwechsel: string[];
        var tmp = Karte(index, "schwarz", Farbwechsel);
        karteen.push(tmp);
        index++;
        
        var plusvier: string[];
        var tmp = Karte(index, "schwarz", plusvier);
        karteen.push(tmp);
        index++;
    }
}

function KarteZiehen() {
    var random = Math.floor(Math.random() * karteen.length);
    // console.log(tmp);
    for(var l=0; l < karteen.length; l++) {
        if(karteen[l].index == random) {
            var gezogeneKarte: karte = karteen.splice(l,1)[0];
            console.log(gezogeneKarte.color + gezogeneKarte.wert);
        }
    }
}

StapelErstellen();
function question() {
    let numCards = parseInt(prompt("Kartenanzahl festlegen"));
   
for (let i:number=0; i<numCards; i++) {
    KarteZiehen();
}
}
document.addEventListener("DOMContentLoaded", question);