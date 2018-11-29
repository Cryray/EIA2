//import * as Http from "http";

namespace L06_SendData {
/*    console.log("Starting server"); //Konsolenausgabe Starting Server   
    let port: number = process.env.PORT; // Variable Port die den Port (Bsp 8100) festlegt      
    if (port == undefined)
        port = 8100; // Wenn der Port nicht definiert wird wird er standardgemäß auf 8100 gesetzt

    let server: Http.Server = Http.createServer(); // Variable server wird als Http.Server festgelegt
    server.addListener("request", handleRequest); // Es wird ein Listener hinzugefügt der bei dem befehl "request" die Funktion "handleRequest" ausführt
    server.addListener("listening", handleListen); //Es wird ein Listener hinzugefügt der bei dem befehl "listening" die Funktion "handleListen" ausführt
    server.listen(port);

    function handleListen(): void {
        console.log("Listening"); //Konsolenausgabe "Listening"
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Request wird definiert als Htto.IncomingMessage und response wird definiert als Http.Server Response   
        console.log("I hear voices!"); // Konsolenausgabe "I hear voices"

        _response.setHeader("content-type", "text/html; charset=utf-8");   // Die Server Response setzt charset=utf-8 im HTML Dokument  
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Die Server Response gibt zugriff bzw erlaubt die Origin (Settings)

        _response.write(_request.url); // Die Server Response sucht die URL 
        
        _response.end(); // Die Server Response wird beendet
    }
*/}