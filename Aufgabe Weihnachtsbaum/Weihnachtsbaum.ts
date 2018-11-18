namespace Weihnachtsbaumkonfigurator {
     interface Product {
        name: string;
        price: number;
        color: string;
        size: string;
    }

     let ball: Product[] = [{ name: "Ball", price: 3, color: "red", size: "small" }, { name: "Ball", price: 3, color: "red", size: "big" }, { name: "Ball", price: 3, color: "silver", size: "small" }, { name: "Ball", price: 3, color: "silver", size: "big" }, { name: "Ball", price: 3, color: "gold", size: "small" }, { name: "Ball", price: 3, color: "gold", size: "big" }, { name: "Ball", price: 3, color: "blue", size: "small" }];
     let tree: Product[] = [{ name: "Small fir tree", price: 10, color: "green", size: "small" }, { name: "Medium fir tree", price: 15, color: "green", size: "medium" }, { name: "Big fir tree", price: 20, color: "green", size: "big" }, { name: "Small Caucasian fir", price: 12, color: "green", size: "small" }, { name: "Medium Caucasian fir", price: 17, color: "green", size: "medium" }, { name: "Big Caucasian fir", price: 12, color: "green", size: "big" }, { name: "Norway spruce", price: 14, color: "green", size: "medium" }, { name: "Bluespruce", price: 12, color: "green", size: "medium" }, { name: "Pine", price: 18, color: "green", size: "medium" }];
     let tinsel: Product[] = [{ name: "Green tinsel", price: 3.50, color: "green", size: "normal" }, { name: "Blue tinsel", price: 3.50, color: "blue", size: "normal" }, { name: "Gold tinsel", price: 3.50, color: "gold", size: "normal" }, { name: "Silver tinsel", price: 3.50, color: "silver", size: "normal" }, { name: "Red tinsel", price: 3.50, color: "red", size: "normal" }];
     let candle: Product[] = [{ name: "candle", price: 1, color: "red", size: "small" }, { name: "candle", price: 1.50, color: "red", size: "medium" }, { name: "candle", price: 2, color: "red", size: "big" }, { name: "candle", price: 1, color: "white", size: "small" }, { name: "candle", price: 1.50, color: "white", size: "medium" }, { name: "candle", price: 2, color: "white", size: "big" }];
     let shipment: Product[] = [{ name: "DHL", price: 4.99, color: "", size: "" }, { name: "Hermes", price: 3.99, color: "", size: "" }, { name: "UPS", price: 6.99, color: "", size: "" }];


    document.addEventListener("DOMContentLoaded", init);

    function init(): void {
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < 1; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            //document.getElementById("summary").addEventListener("click", summary);

            let node: HTMLElement = document.getElementById("Baumart");
            let childNodeHtml: string;
            let art: Product[] = tree;

            childNodeHtml = "";
            childNodeHtml += "<select name=Select id=select>";
            childNodeHtml += "<optgroup label=Baumarten></optgroup> ";
            childNodeHtml += "<datalist id=options>";

            for (let i: number = 0; i < tree.length; i++) {
                childNodeHtml += "<option value=";
                childNodeHtml += "lam" + i;
                childNodeHtml += ">";
                childNodeHtml += tree[i].name;
                childNodeHtml += "</option>";
            }
            childNodeHtml += "</select>";
            childNodeHtml += "<select>";
            childNodeHtml += "<h3>Anzahl:</h3>";
            childNodeHtml += "<option value=clear selected></option>";
            for (let i: number = 0; i < 6; i += 1) {
                childNodeHtml += "<option value=lamettanum";
                childNodeHtml += i;
                childNodeHtml += " id=lamettanum";
                childNodeHtml += i;
                childNodeHtml += ">";
                childNodeHtml += i;
                childNodeHtml += "</option>";
            }
            childNodeHtml += "</select>";
            childNodeHtml += "</hr>";

            node.innerHTML += childNodeHtml;
        }
        
        let node: HTMLElement = document.getElementById("Lametta");
        let childNodeHtml: string;
        let art: Product[] = tinsel;

        childNodeHtml = "";
        childNodeHtml += "<select name=Select id=select>";
        childNodeHtml += "<optgroup label=Lametta></optgroup> ";
        childNodeHtml += "<datalist id=options>";

        for (let i: number = 0; i < tinsel.length; i++) {
            childNodeHtml += "<option value=";
            childNodeHtml += "lam" + i;
            childNodeHtml += ">";
            childNodeHtml += tinsel[i].name;
            childNodeHtml += "</option>";
        }
        childNodeHtml += "</select>";
        childNodeHtml += "<select>";
        childNodeHtml += "<h3>Anzahl:</h3>";
        childNodeHtml += "<option value=clear selected></option>";
        for (let i: number = 0; i < 20; i += 5) {
            childNodeHtml += "<option value=lamettanum";
            childNodeHtml += i;
            childNodeHtml += " id=lamettanum";
            childNodeHtml += i;
            childNodeHtml += ">";
            childNodeHtml += i;
            childNodeHtml += "</option>";
        }
        childNodeHtml += "</select>";
        childNodeHtml += "</hr>";

        node.innerHTML += childNodeHtml;
    }
    let node: HTMLElement = document.getElementById("Kugeln");
    let childNodeHtml: string;
    let art: Product[] = ball;

    childNodeHtml = "";
    childNodeHtml += "<select name=Select id=select>";
    childNodeHtml += "<optgroup label=Kugeln></optgroup> ";
    childNodeHtml += "<datalist id=options>";

    for (let i: number = 0; i < ball.length; i++) {
        childNodeHtml += "<option value=";
        childNodeHtml += "lam" + i;
        childNodeHtml += ">";
        childNodeHtml += ball[i].name;
        childNodeHtml += "</option>";
    }
    childNodeHtml += "</select>";
    childNodeHtml += "<select>";
    childNodeHtml += "<h3>Anzahl:</h3>";
    childNodeHtml += "<option value=clear selected></option>";
    for (let i: number = 0; i < 20; i += 1) {
        childNodeHtml += "<option value=ballnum";
        childNodeHtml += i;
        childNodeHtml += " id=ballnum";
        childNodeHtml += i;
        childNodeHtml += ">";
        childNodeHtml += i;
        childNodeHtml += "</option>";
    }
    childNodeHtml += "</select>";
    childNodeHtml += "</hr>";

    node.innerHTML += childNodeHtml;
}
    function handleChange(_event: Event): void {

    }





















































































}
