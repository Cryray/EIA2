var aufgabe0: string;
(function (aufgabe0) {
    function main() {
        var i: string = prompt("Name eingeben");
        var a: string;
        a = "Willkommen auf Meiner Seite ";
        a += i;
        document.getElementbyId("content").innerHTML += a;
        console.log("Willkommen auf Meiner Seite", i, );
    }
    document.addEventListener('DOMContentLoaded', main);
})(aufgabe0 || (aufgabe0 = {}));
//# sourceMappingURL=aufgabe0.js.maps