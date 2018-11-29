var Wbk;
(function (Wbk) {
    Wbk._data = {
        "tree": [
            { name: "fir", price: 15 },
            { name: "Caucasian fir", price: 17 },
            { name: "Norway spruce", price: 18 },
            { name: "Bluespruce", price: 16 },
            { name: "Pine", price: 16 }
        ],
        "ball": [
            { name: "red", price: 1 },
            { name: "green", price: 1.50 },
            { name: "blue", price: 2 },
            { name: "gold", price: 1.50 },
            { name: "silver", price: 1 }
        ],
        "tinsel": [
            { name: "red", price: 3 },
            { name: "green", price: 3.50 },
            { name: "blue", price: 3 },
            { name: "gold", price: 3.50 },
            { name: "silver", price: 3 }
        ],
        "candle": [
            { name: "red", price: 2 },
            { name: "white", price: 2.50 },
            { name: "honey", price: 2 }
        ],
        "shipment": [
            { name: "DHL", price: 5.99 },
            { name: "Hermes", price: 6.50 },
            { name: "UPS", price: 6 }
        ]
    };
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        createFormat(Wbk._data);
    }
    /* function init(): void {
         let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
         for (let i: number = 0; i < 1; i++) {
             let fieldset: HTMLFieldSetElement = fieldsets[i];
             createFormat(fieldset, data);
             // fieldset.addEventListener("change", handleChange);
         }
     }*/
    function createFormat(_homoVar) {
        for (let key in _homoVar) {
            let value = _homoVar[key];
            let fieldsets = document.getElementsByTagName("fieldset");
            for (let b = 0; b < 5; b++) {
                let i = 0 + b;
                i < value.length;
                let fieldset = fieldsets[i];
                for (let a = 0; a < value.length; a++) {
                    let input = document.createElement("input");
                    fieldset.appendChild(input);
                    input.type = "checkbox";
                    input.name = "type";
                    input.value = value[a].name;
                    input.id = value[a].name;
                    let label = document.createElement("label");
                    fieldset.appendChild(label);
                    chooseNumber(a, fieldset, value);
                    label.setAttribute("chosenType", value[a].name);
                    label.innerHTML = value[a].name + " " + value[a].price + "Euro ";
                }
            }
        }
    }
    function chooseNumber(_a, _fieldset, _value) {
        let input = document.createElement("input");
        _fieldset.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.max = "50";
        input.step = "1";
        input.value = _value[_a].name;
        input.id = _value[_a].name;
        let label = document.createElement("label");
        _fieldset.appendChild(label);
    }
})(Wbk || (Wbk = {}));
//# sourceMappingURL=newchristmas.js.map