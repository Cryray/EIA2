namespace DatabaseClient {
    window.addEventListener("load", init);
   // let serverAddress: string = "http://localhost:8100";
    let serverAddress: string = "https://githubcryray.herokuapp.com/";
    

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let findButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("find");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        findButton.addEventListener("click", find);
    }

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&score=" + document.getElementById("finalScore").getAttribute("value");
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function refresh(_event: Event): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    
    function find(_event: Event): void {
        let search: HTMLInputElement = <HTMLInputElement>document.getElementById("Suche");
        let query: string = "command=find";
        query += "&matrikel=" + search.value;
        console.log(query);
        sendRequest(query, handleFindResponse);
        }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function playerDataSort(_a: StudentData, _b: StudentData): number {
        let returnNumber: number;
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
    
    
    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLElement = document.getElementById("highscores");
            let highscores: number[] = [];
            let dataArray: StudentData[] = JSON.parse(xhr.response);
            dataArray.sort(playerDataSort);
            for (let i: number = 0; i < dataArray.length; i++) {
                console.log(dataArray[i].name);
                output.innerHTML += "<p id='showScores'><strong>Name: </strong>" + dataArray[i].name + "<br><strong>Score: </strong>" + dataArray[i].score + "</p>";
            }
        }
        }
}