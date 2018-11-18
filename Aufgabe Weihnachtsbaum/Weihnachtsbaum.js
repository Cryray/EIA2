var Weihnachtsbaumkonfigurator;
(function (Weihnachtsbaumkonfigurator) {
    var ball = [{ name: "Ball", price: 3, color: "red", size: "small" }, { name: "Ball", price: 3, color: "red", size: "big" }, { name: "Ball", price: 3, color: "silver", size: "small" }, { name: "Ball", price: 3, color: "silver", size: "big" }, { name: "Ball", price: 3, color: "gold", size: "small" }, { name: "Ball", price: 3, color: "gold", size: "big" }, { name: "Ball", price: 3, color: "blue", size: "small" }];
    var tree = [{ name: "Small fir tree", price: 10, color: "green", size: "small" }, { name: "Medium fir tree", price: 15, color: "green", size: "medium" }, { name: "Big fir tree", price: 20, color: "green", size: "big" }, { name: "Small Caucasian fir", price: 12, color: "green", size: "small" }, { name: "Medium Caucasian fir", price: 17, color: "green", size: "medium" }, { name: "Big Caucasian fir", price: 12, color: "green", size: "big" }, { name: "Norway spruce", price: 14, color: "green", size: "medium" }, { name: "Bluespruce", price: 12, color: "green", size: "medium" }, { name: "Pine", price: 18, color: "green", size: "medium" }];
    var tinsel = [{ name: "Green tinsel", price: 3.50, color: "green", size: "normal" }, { name: "Blue tinsel", price: 3.50, color: "blue", size: "normal" }, { name: "Gold tinsel", price: 3.50, color: "gold", size: "normal" }, { name: "Silver tinsel", price: 3.50, color: "silver", size: "normal" }, { name: "Red tinsel", price: 3.50, color: "red", size: "normal" }];
    var candle = [{ name: "candle", price: 1, color: "red", size: "small" }, { name: "candle", price: 1.50, color: "red", size: "medium" }, { name: "candle", price: 2, color: "red", size: "big" }, { name: "candle", price: 1, color: "white", size: "small" }, { name: "candle", price: 1.50, color: "white", size: "medium" }, { name: "candle", price: 2, color: "white", size: "big" }];
    var shipment = [{ name: "DHL", price: 4.99, color: "", size: "" }, { name: "Hermes", price: 3.99, color: "", size: "" }, { name: "UPS", price: 6.99, color: "", size: "" }];
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        var fieldsets = document.getElementsByTagName("fieldset");
        for (var i = 0; i < 1; i++) {
            var fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            //document.getElementById("summary").addEventListener("click", summary);
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
            childNodeHtml_1 += "<select>";
            childNodeHtml_1 += "<h3>Anzahl:</h3>";
            childNodeHtml_1 += "<option value=clear selected></option>";
            for (var i_2 = 0; i_2 < 6; i_2 += 1) {
                childNodeHtml_1 += "<option value=lamettanum";
                childNodeHtml_1 += i_2;
                childNodeHtml_1 += " id=lamettanum";
                childNodeHtml_1 += i_2;
                childNodeHtml_1 += ">";
                childNodeHtml_1 += i_2;
                childNodeHtml_1 += "</option>";
            }
            childNodeHtml_1 += "</select>";
            childNodeHtml_1 += "</hr>";
            node_1.innerHTML += childNodeHtml_1;
        }
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
    function handleChange(_event) {
    }
})(Weihnachtsbaumkonfigurator || (Weihnachtsbaumkonfigurator = {}));
//# sourceMappingURL=Weihnachtsbaum.js.map