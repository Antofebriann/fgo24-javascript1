for (let i = 1; i <= 5; i++ ) {
    if (i === 4) {
    console.log("fazztrack");
    } else {
    console.log(i);
    }
}


let x = 0
while(x<5){
    let y = 0
    let temp = ""
    while(y<5-x)
        temp +=  "* "
    y++;
}
console.log("loop"+(x+1))
x++;

const u = 5
let i = 0
while(i < u) {
    let j = 0
    let temp = " "
    while(j < u) {
        if (i === 0 || i === u - 1 || j == 0 || j === - 1) {
            temp += " * "
        } else {
            temp += " "
        }
        j++;
    }
    console.log(temp)
    i++;
} 
