var Uno;
(function (Uno) {
    document.addEventListener("DOMContentLoaded", init);
    let hand = [];
    let pile = [];
    let cards = [{ color: "#ff0000", value: "0" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "2" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "aussetzen" }, { color: "#ff0000", value: "aussetzen" },
        { color: "#00ff00", value: "0" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "aussetzen" }, { color: "#00ff00", value: "aussetzen" },
        { color: "#0000ff", value: "0" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "aussetzen" }, { color: "#0000ff", value: "aussetzen" },
        { color: "#ffff00", value: "0" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "aussetzen" }, { color: "#ffff00", value: "aussetzen" },
        { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }];
    function init() {
        let numOfCards = prompt("Kartenanzahl eingeben");
        let numCards = +numOfCards;
        handleClickOnButton();
        drawCards(numCards);
        installEventListeners();
    }
    function installEventListeners() {
        document.getElementById("hand").addEventListener("click", playCard);
        document.getElementById("drawpile").addEventListener("click", drawOneCard);
    }
    function handleClickOnButton() {
        let clickButton = document.getElementById("button");
        clickButton.addEventListener("click", sortCards);
    }
    function sortCards(_event) {
        console.log("Hi"); //Test
        hand.sort(compareCards);
        displayHand(hand);
    }
    function compareCards(card1, card2) {
        let x = card1.color.toLowerCase();
        let y = card2.color.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    }
    function drawCards(_numCards) {
        for (let x = 0; x < _numCards; x++) {
            let random = Math.floor(Math.random() * cards.length);
            let getCard = cards.splice(random, 1)[0];
            hand.push(getCard);
            displayHand(hand);
        }
    }
    function displayHand(hand) {
        let handDiv = document.getElementById("hand");
        let span = document.createElement("span");
        for (let o = 0; o < hand.length; o++) {
            span.innerText = hand[o].value;
            span.style.backgroundColor = hand[o].color;
            span.style.color = "black";
            span.id = o.toString();
            if (hand[o].color == "#000000" || hand[o].color == "#0000ff") {
                span.style.color = "white";
            }
            handDiv.appendChild(span);
        }
    }
    function playCard(_event) {
        let cardsOnHand = document.getElementById("span");
        let parCard = _event.target;
        if (parCard != cardsOnHand) {
            let index;
            let cardId = parCard.getAttribute("id");
            index = parseInt(cardId);
            let card = hand.splice(index, 1)[0];
            pile.push(card);
        }
    }
    function drawOneCard(_event) {
        drawCard(1);
    }
    function drawCard(_cards) {
        if (cards.length > 0) {
            for (let i = 0; i < _cards; i++) {
                let random = Math.floor(Math.random() * cards.length);
                let card = cards.splice(random, 1)[0];
                hand.push(card);
            }
        }
    }
})(Uno || (Uno = {}));
//# sourceMappingURL=uno.js.map