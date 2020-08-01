var zauberbild;
(function (zauberbild) {
    let crc2;
    const fps = 30;
    let graphics;
    let dropdownGraphicsMade;
    let dropdownChooseGraphics;
    let optionForm;
    let inputName;
    let inputWidth;
    let inputHeigth;
    let inputXCoord;
    let inputYCoord;
    let saveChangesButton;
    let deleteGraphicButton;
    window.addEventListener("load", init);
    function init() {
        //get Elements from document and set them
        let canvas = document.getElementById("myCanvas");
        dropdownGraphicsMade = document.getElementById("dropdownGraphicsMade");
        dropdownChooseGraphics = document.getElementById("dropdownChooseGraphics");
        optionForm = document.getElementById("optionForm");
        inputName = document.getElementById("name");
        inputWidth = document.getElementById("width");
        inputHeigth = document.getElementById("heigth");
        inputXCoord = document.getElementById("xCoord");
        inputYCoord = document.getElementById("yCoord");
        saveChangesButton = document.getElementById("saveChanges");
        deleteGraphicButton = document.getElementById("deleteGraphic");
        //set necessary Event listeners
        crc2 = canvas.getContext("2d");
        dropdownGraphicsMade.addEventListener("change", openGraphicOptions);
        saveChangesButton.addEventListener("click", changeGraphicOptions);
        deleteGraphicButton.addEventListener("click", deleteGraphic);
        canvas.addEventListener("click", createGraphic);
        inputName.addEventListener("input", enableSaveChangesButton);
        inputWidth.addEventListener("input", enableSaveChangesButton);
        inputHeigth.addEventListener("input", enableSaveChangesButton);
        inputXCoord.addEventListener("input", enableSaveChangesButton);
        inputYCoord.addEventListener("input", enableSaveChangesButton);
        //clear inputs
        inputName.value = "";
        inputWidth.value = "";
        inputHeigth.value = "";
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