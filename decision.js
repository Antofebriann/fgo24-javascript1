const binatang = ["ayam", "bebek"];

for (let i = 0; i < binatang.length; i++) {
    console.log(binatang[i]);
    switch(binatang[i]) {
        case "ayam":
            console.log("kukuruyuk");
            break;
        case "bebek":
            console.log("wekwek");
            break;
        default:
            console.log("binatang tidak dimiliki");
    }
}
