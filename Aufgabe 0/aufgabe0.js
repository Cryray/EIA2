var Aufgabe0;
(function (Aufgabe0) {
    function main() {
        var i = prompt("Name eingeben");
        var a;
        a = "Willkommen auf Meiner Seite ";
        a += i;
        document.getElementById("content").innerHTML += a;
        console.log("Willkommen auf Meiner Seite", i);
    }
    document.addEventListener('DOMContentLoaded', main);
})(Aufgabe0 || (Aufgabe0 = {}));
//# sourceMappingURL=aufgabe0.js.map