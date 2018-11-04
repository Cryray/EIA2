var uno;
(function (uno) {
    document.addEventListener("DOMContentLoaded", init);
    var cards = [{ color: "#ff0000", value: "0" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "2" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "aussetzen" }, { color: "#ff0000", value: "aussetzen" },
        { color: "#00ff00", value: "0" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "aussetzen" }, { color: "#00ff00", value: "aussetzen" },
        { color: "#0000ff", value: "0" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "aussetzen" }, { color: "#0000ff", value: "aussetzen" },
        { color: "#ffff00", value: "0" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "aussetzen" }, { color: "#ffff00", value: "aussetzen" },
        { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }];
    var hand = [];
    function init() {
        var numOfCards = prompt("Kartenanzahl eingeben");
        var numCards = +numOfCards;
        drawCards(numCards);
    }
    function drawCards(_numCards) {
        for (var x = 0; x < _numCards; x++) {
            var random = Math.floor(Math.random() * cards.length);
            var getcard = cards.splice(random, 1)[0];
            hand.push(getcard);
            displayHand(hand);
        }
    }
    function displayHand(hand) {
        var handdiv = document.getElementById("hand");
        var span = document.createElement("span");
        for (var o = 0; o < hand.length; o++) {
            span.innerText = hand[o].value;
            span.style.backgroundColor = hand[o].color;
            span.style.color = "black";
            if (hand[o].color == "#000000" || hand[o].color == "#0000ff") {
                span.style.color = "white";
            }
            handdiv.appendChild(span);
        }
    }
})(uno || (uno = {}));
//# sourceMappingURL=uno.js.map