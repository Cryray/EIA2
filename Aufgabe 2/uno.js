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
var blackcards = [farbwechsel, farbwechsel, farbwechsel, farbwechsel, plusvier, plusvier, plusvier, plusvier];
var colorcards = [green, yellow, blue, red];
var specialcards = [greenspecial, yellowspecial, redspecial, bluespecial];
var deck = [blackcards, colorcards, specialcards];
var node = document.getElementById("content");
var childNodeHtml;
var i = 0;
while (i < deck.length) {
    childNodeHtml = "<div";
    childNodeHtml = "id=deck";
    childNodeHtml = ">";
    childNodeHtml = "<div";
    childNodeHtml = "id=card1";
    childNodeHtml = ">";
    childNodeHtml = "<div";
    childNodeHtml = "id=card2";
    childNodeHtml = ">";
    childNodeHtml = "<div";
    childNodeHtml = "id=card3";
    childNodeHtml = ">";
    childNodeHtml = "<div";
    childNodeHtml = "id=karte4";
    childNodeHtml = ">";
}
//# sourceMappingURL=uno.js.map