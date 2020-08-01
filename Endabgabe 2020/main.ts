namespace zauberbild {

    let crc2: CanvasRenderingContext2D;
    const fps: number = 30;
    let graphics: BaseGraphic[];
    let dropdownGraphicsMade: HTMLSelectElement;
    let dropdownChooseGraphics: HTMLSelectElement;
    let optionForm: HTMLOptionElement;
    let inputName: HTMLInputElement;
    let inputWidth: HTMLInputElement;
    let inputHeigth: HTMLInputElement;
    let inputXCoord: HTMLInputElement;
    let inputYCoord: HTMLInputElement;
    let saveChangesButton: HTMLInputElement;
    let deleteGraphicButton: HTMLInputElement;
    window.addEventListener("load", init);
    
    function init(): void {
        //get Elements from document and set them
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
        dropdownGraphicsMade = <HTMLSelectElement>document.getElementById("dropdownGraphicsMade");
        dropdownChooseGraphics = <HTMLSelectElement>document.getElementById("dropdownChooseGraphics");
        optionForm = <HTMLOptionElement>document.getElementById("optionForm");
        inputName = <HTMLInputElement>document.getElementById("name");
        inputWidth = <HTMLInputElement>document.getElementById("width");
        inputHeigth = <HTMLInputElement>document.getElementById("heigth");
        inputXCoord = <HTMLInputElement>document.getElementById("xCoord");
        inputYCoord = <HTMLInputElement>document.getElementById("yCoord");
        saveChangesButton = <HTMLInputElement>document.getElementById("saveChanges");
        deleteGraphicButton = <HTMLInputElement>document.getElementById("deleteGraphic");
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
        inputWidth.value ="";
        inputHeigth.value="";
        inputXCoord.value="";
        inputYCoord.value="";
        //disable Buttons
        saveChangesButton.disabled = true;
        deleteGraphicButton.disabled = true;
        //initialize graphics array
        graphics = [];
        update();
    }
    
    function makeGraphicObject(graphic:string):BaseGraphic{
        switch (graphic){
            case "Rectangle": return new Rectangle()
            break;
            case "Circle": return new Circle()
            default: return null;
        }
    }

    function createGraphic(_event: MouseEvent): void {
        if(dropdownGraphicsMade.length == 0){
            deleteGraphicButton.disabled = false;
        }
        let graphic: BaseGraphic = makeGraphicObject((<HTMLOptionElement>dropdownChooseGraphics.children[dropdownChooseGraphics.selectedIndex]).value);
        graphics[graphic.id] = graphic;
        graphic.x = _event.pageX;
        graphic.y = _event.pageY;
        graphic.draw(crc2);
        let graphicHtmlElement: HTMLOptionElement = new Option(graphic.name, graphic.id.toString());
        dropdownGraphicsMade.appendChild(graphicHtmlElement);
        dropdownGraphicsMade.selectedIndex = dropdownGraphicsMade.length - 1;
        inputName.value = graphic.name;
        inputWidth.value = graphic.width.toString();
        inputHeigth.value = graphic.heigth.toString();
        inputXCoord.value = graphic.x.toString();
        inputYCoord.value = graphic.y.toString();

    }
    function deleteGraphic() {
        let graphic: BaseGraphic = getCurrentSelection();
        dropdownGraphicsMade.removeChild(dropdownGraphicsMade.children[dropdownGraphicsMade.selectedIndex]);
        delete graphics[graphic.id]; //splice/undefined not working, because we use id=index
        if (dropdownGraphicsMade.length == 0) {
            deleteGraphicButton.disabled = true;
            return;
        }
    }
    function openGraphicOptions(): void {
        let graphic: BaseGraphic = getCurrentSelection();
        inputName.value = graphic.name;
        inputWidth.value = graphic.width.toString();
        inputHeigth.value = graphic.heigth.toString();
        inputXCoord.value = graphic.x.toString();
        inputYCoord.value = graphic.y.toString();
    }
    function changeGraphicOptions(): void {
        saveChangesButton.disabled = true;
        let graphic: BaseGraphic = getCurrentSelection();
        graphic.name = inputName.value;
        (<HTMLOptionElement>dropdownGraphicsMade.children[dropdownGraphicsMade.selectedIndex]).text = graphic.name;
        graphic.width = Number(inputWidth.value);
        graphic.heigth = Number(inputHeigth.value);
        graphic.x = Number(inputXCoord.value);
        graphic.y = Number(inputYCoord.value);
        
    }
    function enableSaveChangesButton(){
        saveChangesButton.disabled = false;
    }
    function getCurrentSelection(): BaseGraphic {
        return graphics[Number((<HTMLOptionElement>dropdownGraphicsMade.children[dropdownGraphicsMade.selectedIndex]).value)];
    }
    function update(): void {
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        graphics.forEach(element => {
            element.draw(crc2);
        });
        window.setTimeout(update, 1000 / fps);
    }
}
