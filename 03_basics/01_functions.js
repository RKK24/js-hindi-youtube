function sayMyName(){
    console.log("J");
    console.log("h");
    console.log("o");
    console.log("n");
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

// addTwoNumbers(3, 4);
// addTwoNumbers(3, "4");
// addTwoNumbers(3, "a");
// addTwoNumbers(3, null);

function addTwoNumbers(number1, number2){
    // let result=number1+number2;
    // return result;
    return number1+number2;
}

const result = addTwoNumbers(3, 5);
// console.log("Result: ",result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}

// loginUserMessage();
// console.log(loginUserMessage("Jhon"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());
// console.log(loginUserMessage("Jhon"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Jhon",
    price: 199
};

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    username: "Sam",
    price: 399
})

// const mynewArray = [200, 400, 100, 600];

// function returnSecondValue(getArray){
//     ret
// }