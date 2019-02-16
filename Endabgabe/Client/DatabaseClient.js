var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    // let serverAddress: string = "http://localhost:8100";
    let serverAddress = "https://githubcryray.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let findButton = document.getElementById("find");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        findButton.addEventListener("click", find);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&score=" + document.getElementById("finalScore").getAttribute("value");
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function find(_event) {
        let search = document.getElementById("Suche");
        let query = "command=find";
        query += "&matrikel=" + search.value;
        console.log(query);
        sendRequest(query, handleFindResponse);
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
            alert(xhr.response);
        }
    }
    function playerDataSort(_a, _b) {
        let returnNumber;
        if (_a.score > _b.score) {
            returnNumber = -1;
        }
        else if (_a.score < _b.score) {
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
            let dataArray = JSON.parse(xhr.response);
            dataArray.sort(playerDataSort);
            for (let i = 0; i < dataArray.length; i++) {
                console.log(dataArray[i].name);
                output.innerHTML += "<p id='showScores'><strong>Name: </strong>" + dataArray[i].name + "<br><strong>Score: </strong>" + dataArray[i].score + "</p>";
            }
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map