var Weihnachtsbaumkonfigurator;
(function (Weihnachtsbaumkonfigurator) {
    var ball = [{ name: "Small red ball", price: 3, color: "red", size: "small" }, { name: "Big red ball", price: 3, color: "red", size: "big" }, { name: "Small silver ball", price: 3, color: "silver", size: "small" }, { name: "Big silver ball", price: 3, color: "silver", size: "big" }, { name: "Small golden ball", price: 3, color: "gold", size: "small" }, { name: "Big golden ball", price: 3, color: "gold", size: "big" }, { name: "Small blue ball", price: 3, color: "blue", size: "small" }];
    var tree = [{ name: "Small fir tree", price: 10, color: "green", size: "small" }, { name: "Medium fir tree", price: 15, color: "green", size: "medium" }, { name: "Big fir tree", price: 20, color: "green", size: "big" }, { name: "Small Caucasian fir", price: 12, color: "green", size: "small" }, { name: "Medium Caucasian fir", price: 17, color: "green", size: "medium" }, { name: "Big Caucasian fir", price: 12, color: "green", size: "big" }, { name: "Norway spruce", price: 14, color: "green", size: "medium" }, { name: "Bluespruce", price: 12, color: "green", size: "medium" }, { name: "Pine", price: 18, color: "green", size: "medium" }];
    var tinsel = [{ name: "Green tinsel", price: 3.50, color: "green", size: "normal" }, { name: "Blue tinsel", price: 3.50, color: "blue", size: "normal" }, { name: "Gold tinsel", price: 3.50, color: "gold", size: "normal" }, { name: "Silver tinsel", price: 3.50, color: "silver", size: "normal" }, { name: "Red tinsel", price: 3.50, color: "red", size: "normal" }];
    var candle = [{ name: "Small red candle", price: 1, color: "red", size: "small" }, { name: "Medium red candle", price: 1.50, color: "red", size: "medium" }, { name: "Big red candle", price: 2, color: "red", size: "big" }, { name: "small white candle", price: 1, color: "white", size: "small" }, { name: "medium white candle", price: 1.50, color: "white", size: "medium" }, { name: "Big white candle", price: 2, color: "white", size: "big" }];
    var shipment = [{ name: "DHL", price: 4.99, color: "", size: "" }, { name: "Hermes", price: 3.99, color: "", size: "" }, { name: "UPS", price: 6.99, color: "", size: "" }];
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("DOMContentLoaded", init2);
    document.addEventListener("DOMContentLoaded", init3);
    document.addEventListener("DOMContentLoaded", init4);
    function init() {
        var fieldsets = document.getElementsByTagName("fieldset");
        for (var i = 0; i < 1; i++) {
            var fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            //document.getElementById("summary").addEventListener("click", summary);
            //BAUMART
            var node_1 = document.getElementById("Baumart");
            var childNodeHtml_1 = void 0;
            var art_1 = tree;
            childNodeHtml_1 = "";
            childNodeHtml_1 += "<select name=Select id=select>";
            childNodeHtml_1 += "<optgroup label=Baumarten></optgroup> ";
            childNodeHtml_1 += "<datalist id=options>";
            for (var i_1 = 0; i_1 < tree.length; i_1++) {
                childNodeHtml_1 += "<option value=";
                childNodeHtml_1 += "lam" + i_1;
                childNodeHtml_1 += ">";
                childNodeHtml_1 += tree[i_1].name;
                childNodeHtml_1 += "</option>";
            }
            childNodeHtml_1 += "</select>";
            childNodeHtml_1 += "</hr>";
            node_1.innerHTML += childNodeHtml_1;
        }
        //LAMETTA    
        var node = document.getElementById("Lametta");
        var childNodeHtml;
        var art = tinsel;
        childNodeHtml = "";
        childNodeHtml += "<select name=Select id=select>";
        childNodeHtml += "<optgroup label=Lametta></optgroup> ";
        childNodeHtml += "<datalist id=options>";
        for (var i = 0; i < tinsel.length; i++) {
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
        for (var i = 0; i < 20; i += 5) {
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
    //KERZEN
    function init2() {
        var fieldsets = document.getElementsByTagName("fieldset");
        for (var i = 0; i < 1; i++) {
            var fieldset = fieldsets[i];
            var node = document.getElementById("Kerzen");
            var childNodeHtml = void 0;
            var art = candle;
            childNodeHtml = "";
            childNodeHtml += "<select name=Select id=select>";
            childNodeHtml += "<optgroup label=Kerzen></optgroup> ";
            childNodeHtml += "<datalist id=options>";
            for (var i_2 = 0; i_2 < candle.length; i_2++) {
                childNodeHtml += "<option value=";
                childNodeHtml += "lam" + i_2;
                childNodeHtml += ">";
                childNodeHtml += candle[i_2].name;
                childNodeHtml += "</option>";
            }
            childNodeHtml += "</select>";
            childNodeHtml += "<select>";
            childNodeHtml += "<h3>Anzahl:</h3>";
            childNodeHtml += "<option value=clear selected></option>";
            for (var i_3 = 0; i_3 < 20; i_3 += 1) {
                childNodeHtml += "<option value=candlenum";
                childNodeHtml += i_3;
                childNodeHtml += " id=candlenum";
                childNodeHtml += i_3;
                childNodeHtml += ">";
                childNodeHtml += i_3;
                childNodeHtml += "</option>";
            }
            childNodeHtml += "</select>";
            childNodeHtml += "</hr>";
            node.innerHTML += childNodeHtml;
        }
    }
    //KUGELN
    function init3() {
        var fieldsets = document.getElementsByTagName("fieldset");
        for (var i = 0; i < 1; i++) {
            var fieldset = fieldsets[i];
            var node = document.getElementById("Kugeln");
            var childNodeHtml = void 0;
            var art = ball;
            childNodeHtml = "";
            childNodeHtml += "<select name=Select id=select>";
            childNodeHtml += "<optgroup label=Kugeln></optgroup> ";
            childNodeHtml += "<datalist id=options>";
            for (var i_4 = 0; i_4 < candle.length; i_4++) {
                childNodeHtml += "<option value=";
                childNodeHtml += "lam" + i_4;
                childNodeHtml += ">";
                childNodeHtml += ball[i_4].name;
                childNodeHtml += "</option>";
            }
            childNodeHtml += "</select>";
            childNodeHtml += "<select>";
            childNodeHtml += "<h3>Anzahl:</h3>";
            childNodeHtml += "<option value=clear selected></option>";
            for (var i_5 = 0; i_5 < 20; i_5 += 1) {
                childNodeHtml += "<option value=ballnum";
                childNodeHtml += i_5;
                childNodeHtml += " id=ballnum";
                childNodeHtml += i_5;
                childNodeHtml += ">";
                childNodeHtml += i_5;
                childNodeHtml += "</option>";
            }
            childNodeHtml += "</select>";
            childNodeHtml += "</hr>";
            node.innerHTML += childNodeHtml;
        }
    }
    //Versand
    function init4() {
        var fieldsets = document.getElementsByTagName("fieldset");
        for (var i = 0; i < 1; i++) {
            var fieldset = fieldsets[i];
            var node = document.getElementById("Versand");
            var childNodeHtml = void 0;
            var art = shipment;
            childNodeHtml = "";
            childNodeHtml += "<select name=Select id=select>";
            childNodeHtml += "<optgroup label=Versand></optgroup> ";
            childNodeHtml += "<datalist id=options>";
            for (var i_6 = 0; i_6 < shipment.length; i_6++) {
                childNodeHtml += "<option value=";
                childNodeHtml += "lam" + i_6;
                childNodeHtml += ">";
                childNodeHtml += shipment[i_6].name;
                childNodeHtml += "</option>";
            }
            childNodeHtml += "</select>";
            childNodeHtml += "</hr>";
            node.innerHTML += childNodeHtml;
        }
    }
    function handleChange(_event) {
    }
})(Weihnachtsbaumkonfigurator || (Weihnachtsbaumkonfigurator = {}));
//# sourceMappingURL=Weihnachtsbaum.js.map