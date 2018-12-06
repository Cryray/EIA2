namespace HolyChristmasTree2 {


    export interface Product {
        name: string;
        price: number;
    }


    export interface ProductGroups {
        [key: string]: Product[];
    }

    export let offers: ProductGroups = {
        "trees": [
            { name: " Nordmanntanne", price: 34.95 },
            { name: " Blaufichte", price: 19.85 },
            { name: " Douglasie Tanne", price: 49.90 }
        ],

        "treeholder": [
            { name: "Blumentopf", price: 20 },
            { name: "rund", price: 24.21 },
            { name: "viereckig", price: 16.65 }
        ],

        "lightstring": [
            { name: "Sterne silber", price: 19.95 },
            { name: "600LEDs", price: 55.55 },
            { name: "LED Kugeln weiss", price: 31.43 }
        ],

        "balls": [
            { name: "rot Kugel", price: 1.50 },
            { name: "gruen Kugel", price: 3.50 },
            { name: "weiss Kugel", price: 5.95 }
        ],

        "lametta": [
            { name: "rot Lametta", price: 4.99 },
            { name: "Gold Lametta", price: 4.99 },
            { name: "silber Lametta", price: 4.99 }
        ],

        "top": [
            { name: "stern", price: 22.00 },
            { name: "engel", price: 12.50 },
            { name: "sternschnuppe", price: 24.95 }
        ]

    };

}