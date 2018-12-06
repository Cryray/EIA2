"use strict";
const Http = require("http"); //http Objekt wird erstellt -> interpreter schaut nach jedem m�glichen import im http Modul und f�gt es dem http Objekt im Code hinzu
const Url = require("url");
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); //Konsolenausgabe Starting Server
    let port = process.env.PORT; //Variable port vom typ number wird festgelegt, port gibt an an welchem Port der Server "h�ren" soll, globale process.env Variable wird von "Node" beim Start der benutzten Applikation indiziert , sie representiert den Zustand der system Umgebung deiner Applikation 
    // wenn sie gestartet wird.
    if (port == undefined)
        port = 8100;
    let server = Http.createServer(); //variable server wird erstellt vom typ http,kann ports auf computer abrufen und funktionen ausf�hren, wandelt verhalten von computer in das eine http-servers um
    server.addListener("request", handleRequest); // wenn im Server eine Anfrage stattfindet dann wird die Funktion handleRequest aufgerufen
    server.addListener("listening", handleListen); // wenn dem Sever der Listener listening �bergeben wird dann wird funktion handleListen aufgerufen
    server.listen(port); // Server sucht an angegebenem port
    function handleListen() {
        console.log("Listening"); //auf Konsole wird Listening ausgegeben
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //auf Konsole wird "I hear voices!" ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //im header werden die eigenschaften der antwort festgelegt (Name,wert)
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Erlaubt den Zugriff auf Daten von einer anderen Quelle
        // _response.write(_request.url); //setzt die �nderungen an die urspr�ngliche url
        console.log(_request.url);
        let url = Url.parse(_request.url, true).query;
        console.log(url);
        for (let key in url) {
            console.log(url[key]);
            console.log(key);
            _response.write(key + " = " + url[key] + "<br>");
        }
        _response.end(); //beendet die Antwort des Servers   
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map