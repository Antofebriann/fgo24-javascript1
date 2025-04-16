for (let i = 1; i <= 5; i++ ) {
    if (i === 4) {
    console.log("fazztrack");
    } else {
    console.log(i);
    }
}


let x = 0;
while (x < 5) {
    let y = 0;
    let temp = "";
    while (y < 5 - x) {
        temp += "* ";
        y++;
    }
    console.log(temp);
    x++;
}


const u = 5;
let i = 0;
while (i < u) {
    let j = 0;
    let temp = "";
    while (j < u) {
        if (i === 0 || i === u - 1 || j === 0 || j === u - 1) {
            temp += "* ";
        } else {
            temp += "  "; 
        }
        j++;
    }
    console.log(temp);
    i++;
}

let n = 5; 
for (let i = 1; i <= n; i++) {
    let temp = "";
    
    for (let j = 1; j <= n - i; j++) {
        temp += " ";
    }
    
    for (let k = 1; k <= i; k++) {
        temp += "* ";
    }
    
    console.log(temp);
}
