namespace zauberbild {

    let crc2: CanvasRenderingContext2D;
    const fps: number = 30;
    let graphics: BaseGraphic[];
    let dropdownGraphicsMade: HTMLSelectElement;
    let dropdownChooseGraphics: HTMLSelectElement;
    let dropdownChooseColor: HTMLSelectElement;
    let optionForm: HTMLOptionElement;
    let canvasForm: HTMLOptionElement;
    let inputName: HTMLInputElement;
    let inputWidth: HTMLInputElement;
    let inputHeigth: HTMLInputElement;
    let inputCanvasWidth: HTMLInputElement;
    let inputCanvasHeigth: HTMLInputElement;
    let inputXCoord: HTMLInputElement;
    let inputYCoord: HTMLInputElement;
    let saveChangesButton: HTMLInputElement;
    let moveRight: HTMLInputElement;
    let rave: HTMLInputElement;
    let saveCanvasChangesButton: HTMLInputElement;
    let saveColorChangesButton: HTMLInputElement;
    let deleteGraphicButton: HTMLInputElement;

    let canvasWidth = 0;
    let canvasHeight = 0;
    window.addEventListener("load", init);
    
    function init(): void {
        //get Elements from document and set them
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
        dropdownGraphicsMade = <HTMLSelectElement>document.getElementById("dropdownGraphicsMade");
        dropdownChooseGraphics = <HTMLSelectElement>document.getElementById("dropdownChooseGraphics");
        dropdownChooseColor = <HTMLSelectElement>document.getElementById("dropdownChooseColor");
        optionForm = <HTMLOptionElement>document.getElementById("optionForm");
        canvasForm = <HTMLOptionElement>document.getElementById("canvasForm");
        inputName = <HTMLInputElement>document.getElementById("name");
        inputWidth = <HTMLInputElement>document.getElementById("width");
        inputHeigth = <HTMLInputElement>document.getElementById("heigth");
        inputCanvasWidth = <HTMLInputElement>document.getElementById("widthC");
        inputCanvasHeigth = <HTMLInputElement>document.getElementById("heigthC");
        inputXCoord = <HTMLInputElement>document.getElementById("xCoord");
        inputYCoord = <HTMLInputElement>document.getElementById("yCoord");
        saveChangesButton = <HTMLInputElement>document.getElementById("saveChanges");
        saveCanvasChangesButton = <HTMLInputElement>document.getElementById("saveChangesC");
        saveColorChangesButton = <HTMLInputElement>document.getElementById("saveChangesColor");
        moveRight= <HTMLInputElement>document.getElementById("moveRight");
        rave= <HTMLInputElement>document.getElementById("rave");
        deleteGraphicButton = <HTMLInputElement>document.getElementById("deleteGraphic");
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
        inputWidth.value ="";
        inputHeigth.value="";
        canvasWidth = Number(inputCanvasWidth.value);
        canvasHeight = Number(inputCanvasHeigth.value);
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


    function moveObjectRight():void{
        
        for (var i :number = 0; i<40; i++) {
            
        setTimeout(moveObjectRightTimeout, 25*i);
        }
    }

    function moveObjectRightTimeout():void {
        let graphic: BaseGraphic = getCurrentSelection();
        graphic.x = Number(graphic.x+26);
    }

    function makeRave():void{
        
        for (var i :number = 0; i<20; i++) {
            
        setTimeout(makeRaveTimeout,200*i,i );
        }
    }

    function makeRaveTimeout(i:number):void {
        let graphic: BaseGraphic = getCurrentSelection();
        if (i%3 == 0) {
            graphic.color = "red";
        }
        else if(i%3==1){
            graphic.color = "blue";
        }
        else if(i%3==2){
            graphic.color = "yellow";
        }
        
        
    }


    function changeGraphicOptionsCanvas(): void {
        
        crc2.canvas.width=canvasWidth;
        crc2.canvas.height=canvasHeight;
        
    }

    function changeCanvasInput(): void {
        console.log("hi");
        canvasWidth = Number(inputCanvasWidth.value);
        canvasHeight = Number(inputCanvasHeigth.value);
        
    }

    function changeCanvasColor(): void {
        
        crc2.canvas.width=canvasWidth;
        crc2.canvas.setAttribute("style",dropdownChooseColor.options[dropdownChooseColor.selectedIndex].value);
        
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
