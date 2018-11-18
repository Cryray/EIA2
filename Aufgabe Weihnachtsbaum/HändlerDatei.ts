namespace Weihnachtsbaumkonfigurator {
    export interface Product {
        name: string;
        price: number;
        color: string;
        size: string;
    }

    export let ball: Product[] = [{ name: "Ball", price: 3, color: "red", size: "small" }, { name: "Ball", price: 3, color: "red", size: "big" }, { name: "Ball", price: 3, color: "silver", size: "small" }, { name: "Ball", price: 3, color: "silver", size: "big" }, { name: "Ball", price: 3, color: "gold", size: "small" }, { name: "Ball", price: 3, color: "gold", size: "big" }, { name: "Ball", price: 3, color: "blue", size: "small" }];
    export let tree: Product[] = [{ name: "small fir tree", price: 10, color: "green", size: "small" }, { name: "medium fir tree", price: 15, color: "green", size: "medium" }, { name: "big fir tree", price: 20, color: "green", size: "big" }, { name: "small Caucasian fir", price: 12, color: "green", size: "small" }, { name: "medium Caucasian fir", price: 17, color: "green", size: "medium" }, { name: "big Caucasian fir", price: 12, color: "green", size: "big" }, { name: "Norway spruce", price: 14, color: "green", size: "medium" }, { name: "Bluespruce", price: 12, color: "green", size: "medium" }, { name: "Pine", price: 18, color: "green", size: "medium" }];
    export let tinsel: Product[] = [{ name: "tinsel", price: 3.50, color: "green", size: "normal" }, { name: "tinsel", price: 3.50, color: "blue", size: "normal" }, { name: "tinsel", price: 3.50, color: "gold", size: "normal" }, { name: "tinsel", price: 3.50, color: "silver", size: "normal" }, { name: "tinsel", price: 3.50, color: "red", size: "normal" }];
    export let candle: Product[] = [{ name: "candle", price: 1, color: "red", size: "small" }, { name: "candle", price: 1.50, color: "red", size: "medium" }, { name: "candle", price: 2, color: "red", size: "big" }, { name: "candle", price: 1, color: "white", size: "small" }, { name: "candle", price: 1.50, color: "white", size: "medium" }, { name: "candle", price: 2, color: "white", size: "big" }];
    export let shipment: Product[] = [{ name: "DHL", price: 4.99, color: "", size: "" }, { name: "Hermes", price: 3.99, color: "", size: "" }, { name: "UPS", price: 6.99, color: "", size: "" }];

}