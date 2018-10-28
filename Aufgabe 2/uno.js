var karteen = [];
function Karte(pIndex, pColor, pWert) {
    this.index = pIndex;
    this.color = pColor;
    this.wert = pWert;
}
function StapelErstellen() {
    var farben = ["rot", "grün", "gelb", "blau"];
    var karte;
    var index = 0;
    //reguläre Karten
    while (farben.length != 0) {
        var werte = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Richtungswechsel", "Aussetzen"];
        var farbe = farben.pop();
        while (werte.length != 0) {
            var werte2 = werte.pop();
            var j; //da jede Karte 2 mal vorhanden
            for (var j = 0; j < 2; j++) {
                if (j === 1 && werte2 == "0") {
                    break;
                }
                else {
                    var tmp = Karte(index, farbe, werte);
                    karteen.push(tmp);
                    index++;
                }
            }
        }
    }
    //Sonderkarten
    for (var k = 0; k < 8; k++) {
        var Farbwechsel;
        var tmp = Karte(index, "schwarz", Farbwechsel);
        karteen.push(tmp);
        index++;
        var plusvier;
        var tmp = Karte(index, "schwarz", plusvier);
        karteen.push(tmp);
        index++;
    }
}
function KarteZiehen() {
    var random = Math.floor(Math.random() * karteen.length);
    // console.log(tmp);
    for (var l = 0; l < karteen.length; l++) {
        if (karteen[l].index == random) {
            var gezogeneKarte = karteen.splice(l, 1)[0];
            console.log(gezogeneKarte.color + gezogeneKarte.wert);
        }
    }
}
StapelErstellen();
function question() {
    var numCards = parseInt(prompt("Kartenanzahl festlegen"));
    for (var i = 0; i < numCards; i++) {
        KarteZiehen();
    }
}
document.addEventListener("DOMContentLoaded", question);
//# sourceMappingURL=uno.js.map