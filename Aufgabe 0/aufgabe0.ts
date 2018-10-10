var aufgabe0;
(function (aufgabe0) {
    function main() {
        var i = prompt("Name eingeben");
        var a;
        a = "Willkommen auf Meiner Seite ";
        a += i;
        document.getElementbyId("content").innerHTML += a;
        console.log("Willkommen auf Meiner Seite", i, );
    }
    document.addEventListener('DOMContentLoaded', main);
})(aufgabe0 || (aufgabe0 = {}));
//# sourceMappingURL=aufgabe0.js.maps