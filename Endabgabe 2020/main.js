var zauberbild;
(function (zauberbild) {
    let crc2;
    const fps = 30;
    let graphics;
    let dropdownGraphicsMade;
    let dropdownChooseGraphics;
    let dropdownChooseColor;
    let optionForm;
    let canvasForm;
    let inputName;
    let inputWidth;
    let inputHeigth;
    let inputCanvasWidth;
    let inputCanvasHeigth;
    let inputXCoord;
    let inputYCoord;
    let saveChangesButton;
    let moveRight;
    let rave;
    let saveCanvasChangesButton;
    let saveColorChangesButton;
    let deleteGraphicButton;
    let canvasWidth = 0;
    let canvasHeight = 0;
    window.addEventListener("load", init);
    function init() {
        //get Elements from document and set them
        let canvas = document.getElementById("myCanvas");
        dropdownGraphicsMade = document.getElementById("dropdownGraphicsMade");
        dropdownChooseGraphics = document.getElementById("dropdownChooseGraphics");
        dropdownChooseColor = document.getElementById("dropdownChooseColor");
        optionForm = document.getElementById("optionForm");
        canvasForm = document.getElementById("canvasForm");
        inputName = document.getElementById("name");
        inputWidth = document.getElementById("width");
        inputHeigth = document.getElementById("heigth");
        inputCanvasWidth = document.getElementById("widthC");
        inputCanvasHeigth = document.getElementById("heigthC");
        inputXCoord = document.getElementById("xCoord");
        inputYCoord = document.getElementById("yCoord");
        saveChangesButton = document.getElementById("saveChanges");
        saveCanvasChangesButton = document.getElementById("saveChangesC");
        saveColorChangesButton = document.getElementById("saveChangesColor");
        moveRight = document.getElementById("moveRight");
        rave = document.getElementById("rave");
        deleteGraphicButton = document.getElementById("deleteGraphic");
        //set necessary Event listeners
        crc2 = canvas.getContext("2d");
        dropdownGraphicsMade.addEventListener("change", openGraphicOptions);
        saveChangesButton.addEventListener("click", changeGraphicOptions);
        moveRight.addEventListener("click", moveObjectRight);
        rave.addEventListener("click", makeRave);
        saveCanvasChangesButton.addEventListener("click", changeGraphicOptionsCanvas);
        saveColorChangesButton.addEventListener("click", changeCanvasColor);
        deleteGraphicButton.addEventListener("click", deleteGraphic);
        canvas.addEventListener("click", createGraphic);
        inputName.addEventListener("input", enableSaveChangesButton);
        inputWidth.addEventListener("input", enableSaveChangesButton);
        inputHeigth.addEventListener("input", enableSaveChangesButton);
        inputCanvasWidth.addEventListener("input", changeCanvasInput);
        inputCanvasHeigth.addEventListener("input", changeCanvasInput);
        inputXCoord.addEventListener("input", enableSaveChangesButton);
        inputYCoord.addEventListener("input", enableSaveChangesButton);
        //clear inputs
        inputName.value = "";
        inputWidth.value = "";
        inputHeigth.value = "";
        canvasWidth = Number(inputCanvasWidth.value);
        canvasHeight = Number(inputCanvasHeigth.value);
        inputXCoord.value = "";
        inputYCoord.value = "";
        //disable Buttons
        saveChangesButton.disabled = true;
        deleteGraphicButton.disabled = true;
        //initialize graphics array
        graphics = [];
        update();
    }
    function makeGraphicObject(graphic) {
        switch (graphic) {
            case "Rectangle":
                return new zauberbild.Rectangle();
                break;
            case "Circle": return new zauberbild.Circle();
            default: return null;
        }
    }
    function createGraphic(_event) {
        if (dropdownGraphicsMade.length == 0) {
            deleteGraphicButton.disabled = false;
        }
        let graphic = makeGraphicObject(dropdownChooseGraphics.children[dropdownChooseGraphics.selectedIndex].value);
        graphics[graphic.id] = graphic;
        graphic.x = _event.pageX;
        graphic.y = _event.pageY;
        graphic.draw(crc2);
        let graphicHtmlElement = new Option(graphic.name, graphic.id.toString());
        dropdownGraphicsMade.appendChild(graphicHtmlElement);
        dropdownGraphicsMade.selectedIndex = dropdownGraphicsMade.length - 1;
        inputName.value = graphic.name;
        inputWidth.value = graphic.width.toString();
        inputHeigth.value = graphic.heigth.toString();
        inputXCoord.value = graphic.x.toString();
        inputYCoord.value = graphic.y.toString();
    }
    function deleteGraphic() {
        let graphic = getCurrentSelection();
        dropdownGraphicsMade.removeChild(dropdownGraphicsMade.children[dropdownGraphicsMade.selectedIndex]);
        delete graphics[graphic.id]; //splice/undefined not working, because we use id=index
        if (dropdownGraphicsMade.length == 0) {
            deleteGraphicButton.disabled = true;
            return;
        }
    }
    function openGraphicOptions() {
        let graphic = getCurrentSelection();
        inputName.value = graphic.name;
        inputWidth.value = graphic.width.toString();
        inputHeigth.value = graphic.heigth.toString();
        inputXCoord.value = graphic.x.toString();
        inputYCoord.value = graphic.y.toString();
    }
    function changeGraphicOptions() {
        saveChangesButton.disabled = true;
        let graphic = getCurrentSelection();
        graphic.name = inputName.value;
        dropdownGraphicsMade.children[dropdownGraphicsMade.selectedIndex].text = graphic.name;
        graphic.width = Number(inputWidth.value);
        graphic.heigth = Number(inputHeigth.value);
        graphic.x = Number(inputXCoord.value);
        graphic.y = Number(inputYCoord.value);
    }
    function moveObjectRight() {
        for (var i = 0; i < 40; i++) {
            setTimeout(moveObjectRightTimeout, 25 * i);
        }
    }
    function moveObjectRightTimeout() {
        let graphic = getCurrentSelection();
        graphic.x = Number(graphic.x + 26);
    }
    function makeRave() {
        for (var i = 0; i < 20; i++) {
            setTimeout(makeRaveTimeout, 200 * i, i);
        }
    }
    function makeRaveTimeout(i) {
        let graphic = getCurrentSelection();
        if (i % 3 == 0) {
            graphic.color = "red";
        }
        else if (i % 3 == 1) {
            graphic.color = "blue";
        }
        else if (i % 3 == 2) {
            graphic.color = "yellow";
        }
    }
    function changeGraphicOptionsCanvas() {
        crc2.canvas.width = canvasWidth;
        crc2.canvas.height = canvasHeight;
    }
    function changeCanvasInput() {
        console.log("hi");
        canvasWidth = Number(inputCanvasWidth.value);
        canvasHeight = Number(inputCanvasHeigth.value);
    }
    function changeCanvasColor() {
        crc2.canvas.width = canvasWidth;
        crc2.canvas.setAttribute("style", dropdownChooseColor.options[dropdownChooseColor.selectedIndex].value);
    }
    function enableSaveChangesButton() {
        saveChangesButton.disabled = false;
    }
    function getCurrentSelection() {
        return graphics[Number(dropdownGraphicsMade.children[dropdownGraphicsMade.selectedIndex].value)];
    }
    function update() {
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        graphics.forEach(element => {
            element.draw(crc2);
        });
        window.setTimeout(update, 1000 / fps);
    }
})(zauberbild || (zauberbild = {}));
//# sourceMappingURL=main.js.map