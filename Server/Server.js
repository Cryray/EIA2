"use strict";
const Http = require("http");
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); //Konsolenausgabe Starting Server   
    let port = process.env.PORT; // Variable Port die den Port (Bsp 8100) festlegt      
    if (port == undefined)
        port = 8100; // Wenn der Port nicht definiert wird wird er standardgemäß auf 8100 gesetzt
    let server = Http.createServer(); // Variable server wird als Http.Server festgelegt
    server.addListener("request", handleRequest); // Es wird ein Listener hinzugefügt der bei dem befehl "request" die Funktion "handleRequest" ausführt
    server.addListener("listening", handleListen); //Es wird ein Listener hinzugefügt der bei dem befehl "listening" die Funktion "handleListen" ausführt
    server.listen(port);
    function handleListen() {
        console.log("Listening"); //Konsolenausgabe "Listening"
    }
    function handleRequest(_request, _response) {
        console.log("_request.url"); // Konsolenausgabe "I hear voices"
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Die Server Response setzt charset=utf-8 im HTML Dokument  
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Die Server Response gibt zugriff bzw erlaubt die Origin (Settings)
        _response.write(_request.url); // Die Server Response sucht die URL 
        _response.end(); // Die Server Response wird beendet
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map