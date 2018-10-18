let Aussetzen: string;
let Richtungswechsel: string;
let zweiziehen: string;
let plusvier: string;
let farbwechsel: string;





let green: number[]= [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
let greenspecial: string[]= [Aussetzen,Aussetzen,Richtungswechsel,Richtungswechsel,zweiziehen];

let yellow: number[]= [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
let yellowspecial: string[]= [Aussetzen,Aussetzen,Richtungswechsel,Richtungswechsel,zweiziehen];

let red: number[]= [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
let redspecial: string[]= [Aussetzen,Aussetzen,Richtungswechsel,Richtungswechsel,zweiziehen];

let blue: number[]= [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
let bluespecial: string[]= [Aussetzen,Aussetzen,Richtungswechsel,Richtungswechsel,zweiziehen];

let blackcards: string[]=[farbwechsel,farbwechsel,farbwechsel,farbwechsel,plusvier,plusvier,plusvier,plusvier]
let colorcards: any[]=[green,yellow,blue,red];
let specialcards: any[]=[greenspecial,yellowspecial,redspecial,bluespecial];


let deck: any[] = [blackcards,colorcards,specialcards];

let node = document.getElementById ("content")
let childNodeHtml:string;
let i:number= 0;
while(i<deck.length){
        childNodeHtml="<div"
        childNodeHtml="id=deck"
        childNodeHtml=">"
        childNodeHtml="<div"
        childNodeHtml="id=card1"
        childNodeHtml=">"
        childNodeHtml="<div"
        childNodeHtml="id=card2"
        childNodeHtml=">"
        childNodeHtml="<div"
        childNodeHtml="id=card3"
        childNodeHtml=">"
        childNodeHtml="<div"
        childNodeHtml="id=karte4"
        childNodeHtml=">"
}