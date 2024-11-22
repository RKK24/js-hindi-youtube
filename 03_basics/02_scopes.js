// var c = 300;
let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    // var c = 30; 
    // console.log("INNER: ", a);   
}
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Jhon";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two();
}

// one();

if (true) {
    const username = "Jhon";
    if(username === "Jhon") {
        const website = "youtube";
        console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);

// **************** interesting concept ****************

console.log(addone(5));
function addone(num){
    return num+1;
}


console.log(addtwo(5));
const addtwo = function(num){ // expression
    return num+2;
}



