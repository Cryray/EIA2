var aufgabe0;
(function (aufgabe0) {
    var i = "";
    function main() {
        var i = prompt("Name eingeben");
        var node = document.getElementById("content");
        node.innerHTML += "Willkommen auf Meiner Seite ";
        node.innerHTML += i;
        console.log("Willkommen auf Meiner Seite", i, );
    }
    document.addEventListener('DOMContentLoaded', main);
})(aufgabe0 || (aufgabe0 = {}));
//# sourceMappingURL=aufgabe0.js.maps