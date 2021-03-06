"use strict";
var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    let serverAddress = "https://githubcryray.herokuapp.com/";
    //let serverAddress: string = "https://<your>.herokuapp.com/";    
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("sendButton");
        let refreshButton = document.getElementById("highscoresButton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&score=" + document.getElementById("finalScore").getAttribute("value");
        // console.log(inputs[0].value);
        sendRequest(query, handleInsertResponse);
        refresh(_event);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function change(_event) {
        let target = _event.target;
        target.setAttribute("value", target.value);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
        }
    }
    function playerDataSort(_a, _b) {
        let returnNumber;
        if (_b.score > _a.score) {
            returnNumber = -1;
        }
        else if (_b.score < _a.score) {
            returnNumber = 1;
        }
        else {
            returnNumber = 0;
        }
        return returnNumber;
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementById("highscores");
            let scores = [];
            let name = [];
            let dataArray = JSON.parse(xhr.response);
            dataArray.sort(playerDataSort);
            let helpString = "";
            for (let i = 0; i < 10; i++) {
                console.log(dataArray.length);
                let place = 1 + i;
                helpString += "<h3>" + place + ". " + dataArray[i].name + " | Score:" + dataArray[i].score + "<br>";
            }
            output.innerHTML = helpString;
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map
