namespace Uno {

    interface Card {
        color: string;
        value: string;
    }

    document.addEventListener( "DOMContentLoaded", init );
    
    
    let hand: Card[] = [];
    let pile: Card[] = [];
    let cards: Card[] = [{ color: "#ff0000", value: "0" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "2" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "aussetzen" }, { color: "#ff0000", value: "aussetzen" },
    { color: "#00ff00", value: "0" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "aussetzen" }, { color: "#00ff00", value: "aussetzen" },
    { color: "#0000ff", value: "0" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "aussetzen" }, { color: "#0000ff", value: "aussetzen" },
    { color: "#ffff00", value: "0" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "aussetzen" }, { color: "#ffff00", value: "aussetzen" },
    { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }];

    function init(): void {
        let numOfCards: string = prompt( "Kartenanzahl eingeben" );
        let numCards: number = +numOfCards;

        drawCards( numCards );
        installEventListeners();
    }
    function installEventListeners(): void {
        document.getElementById( "hand" ).addEventListener( "click", playCard );
        document.getElementById( "drawpile" ).addEventListener( "click", drawOneCard )
    }
    
    function drawCards( _numCards: number ): void {
        for ( let x: number = 0; x < _numCards; x++ ) {
            let random: number = Math.floor( Math.random() * cards.length );
            let getCard: Card = cards.splice( random, 1 )[0];
            hand.push( getCard );
            displayHand( hand );
        }
    }

    function displayHand( hand: Card[] ): void {
        let handDiv: HTMLElement = document.getElementById( "hand" );
        let span: HTMLSpanElement = document.createElement( "span" );
        for ( let o: number = 0; o < hand.length; o++ ) {
            span.innerText = hand[o].value;
            span.style.backgroundColor = hand[o].color;
            span.style.color = "black";
            span.id = o.toString();
            if ( hand[o].color == "#000000" || hand[o].color == "#0000ff" ) {
                span.style.color = "white";
            }

            handDiv.appendChild( span );
        }
    }
    function playCard( _event: Event ): void {
        let cardsOnHand: HTMLElement = document.getElementById( "span" );
        let parCard: HTMLElement = <HTMLElement>_event.target;
        if ( parCard != cardsOnHand ) {
            let index: number;
            let cardId: string = parCard.getAttribute( "id" );
            index = parseInt( cardId );
            let card: Card = hand.splice( index, 1 )[0];
            pile.push( card );
        }
    }
    
    function drawOneCard (_event: Event):void {
        drawCard(1);
    }
    
    function drawCard( _cards: number ): void {
        if ( cards.length > 0 ) {
            for ( let i: number = 0; i < _cards; i++ ) {
                let random: number = Math.floor( Math.random()*cards.length );
                let card: Card = cards.splice( random, 1 )[0];
                hand.push( card );
            }
        }
    }
    
}