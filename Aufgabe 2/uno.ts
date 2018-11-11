namespace Uno {

    interface Card {
        color: string;
        value: string;
    }

    document.addEventListener("DOMContentLoaded", init);
    function start():void {
        document.getElementById("span").addEventListener("click", playCard);
        document.getElementById("Ziehstapel").addEventListener("click" ,drawCardbyClick)
        } 
    let hand: Card[] = [];
    let stapel:Card[]=[];
    let cards: Card[] = [{ color: "#ff0000", value: "0" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "2" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "aussetzen" }, { color: "#ff0000", value: "aussetzen" },
        { color: "#00ff00", value: "0" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "aussetzen" }, { color: "#00ff00", value: "aussetzen" },
        { color: "#0000ff", value: "0" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "aussetzen" }, { color: "#0000ff", value: "aussetzen" },
        { color: "#ffff00", value: "0" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "aussetzen" }, { color: "#ffff00", value: "aussetzen" },
        { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }];

    function init(): void {
        let numOfCards: string = prompt("Kartenanzahl eingeben");
        let numCards: number = +numOfCards;

        drawCards(numCards);
    }

    function drawCards(_numCards: number): void {
        for (let x: number = 0; x < _numCards; x++) {
            let random: number = Math.floor(Math.random() * cards.length);
            let getcard: Card = cards.splice(random, 1)[0];
            hand.push(getcard);
            displayHand(hand);
        }
    }

    function displayHand(hand: Card[]): void {
        let handdiv: HTMLElement = document.getElementById("hand");
        let span: HTMLSpanElement = document.createElement("span");
        for (let o: number = 0; o < hand.length; o++) {
            span.innerText = hand[o].value;
            span.style.backgroundColor = hand[o].color;
            span.style.color ="black";

            if (hand[o].color == "#000000"||hand[o].color == "#0000ff") {
                span.style.color = "white";
            }

            handdiv.appendChild(span);
        }
    }
    function playCard(_event: Event): void {
        let CardsonHand: HTMLElement = document.getElementById("span");
        let parCard: HTMLElement = <HTMLElement>_event.target;
        if (parCard != CardsonHand) {
            let index: number;
            let domAttribute: string = parCard.getAttribute("id");
            domAttribute = domAttribute.substr(1);
            index = parseInt(domAttribute);
            let card: Card = hand.splice(index, 1)[0];
            stapel.push(card);
        }  
        }     
function drawCard(_cards: number, _parnum: number): void {
    if (cards.length > 0) {
        for (let i: number = 0; i < _cards; i++) {
            let maxNumber: number = cards.length;
            let random: number = Math.floor(Math.random() * Math.floor(_parnum));;
            let card: Card = cards.splice(random, 1)[0];
            hand.push(card);
        }
    }
}
function drawCardbyClick(): void {
    drawCard (1);
    start();
}


}