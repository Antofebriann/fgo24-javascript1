const studentData = [
    { name: "John", score: 80 },
    { name: "Arie", score: 99 },
    { name: "Denis", score: 60 },
    { name: "Jane", score: 85 },
    { name: "Ed", score: 90 }
];

let average = 0;
for (let i = 0; i < studentData.length; i++) {
    average += studentData[i].score;
}
console.log(`Nilai rata-rata siswa adalah ${average / studentData.length}`);

let high = { score: 0 };
for (let i = 0; i < studentData.length; i++) {
    if (high.score < studentData[i].score) {
        high = studentData[i];
    }
}
console.log(`Siswa dengan nama ${high.name} adalah siswa dengan nilai tertinggi ${high.score}`);

let min = studentData[0];
for (let i = 1; i < studentData.length; i++) {
    if (min.score > studentData[i].score) {
        min = studentData[i];
    }
}
console.log(`Siswa dengan nama ${min.name} adalah siswa dengan nilai terendah ${min.score}`);
