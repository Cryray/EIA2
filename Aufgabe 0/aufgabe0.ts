namespace Aufgabe0 {
    function main() {
        let i: string = prompt( "Name eingeben" );
        let a: string;
        a = "Willkommen auf Meiner Seite ";
        a += i;
        document.getElementById( "content" ).innerHTML += a;
        console.log( "Willkommen auf Meiner Seite", i );
    }
    document.addEventListener( 'DOMContentLoaded', main );
    }