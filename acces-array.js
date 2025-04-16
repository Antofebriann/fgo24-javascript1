const data = {
    name: "farah",
    age: 21,
    data: {
       data: [
       { greet: ["hi", "hello", "hai","how"]},
       { hobbis: ["run", "cyc", "soc"] }
       ]
    }
};

console.log(data.data.data[0].greet[1]);
console.log(data[0][1][3].string[1].value)