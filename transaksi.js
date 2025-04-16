const transactions = [
    { item: "Laptop", price: 8000000, date: "2025-04-01" },
    { item: "Smartphone", price: 4000000, date: "2025-04-03" },
    { item: "Headphones", price: 1500000, date: "2025-04-02" },
    { item: "Mouse", price: 25000, date: "2025-04-01" },
    { item: "Keyboard", price: 60000, date: "2025-04-05" },
    { item: "Monitor", price: 2000000, date: "2025-04-04" },
    { item: "Printer", price: 1200000, date: "2025-04-06" },
    { item: "Webcam", price: 90000, date: "2025-04-07" },
    { item: "Charger", price: 30000, date: "2025-04-08" },
    { item: "Tablet", price: 3500000, date: "2025-04-10" }
];

let highTransaction = { price: 0 };
for (let i = 0; i < transactions.length; i++) {
    if (highTransaction.price < transactions[i].price) {
        highTransaction = transactions[i];
    }
}
console.log(`Transaksi dengan nominal tertinggi adalah ${highTransaction.item} dengan harga ${highTransaction.price} pada tanggal ${highTransaction.date}`);

let lowTransaction = transactions[0];
for (let i = 1; i < transactions.length; i++) {
    if (lowTransaction.price > transactions[i].price) {
        lowTransaction = transactions[i];
    }
}
console.log(`Tanggal transaksi dengan nilai terendah adalah ${lowTransaction.date} dengan item ${lowTransaction.item} dan harga ${lowTransaction.price}`);

let averagePrice = 0;
for (let i = 0; i < transactions.length; i++) {
    averagePrice += transactions[i].price;
}
averagePrice /= transactions.length;
console.log(`Harga rata-rata dari semua barang adalah ${averagePrice.toFixed(2)}`);
