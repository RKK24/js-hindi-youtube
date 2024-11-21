// Singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Jhon",
    "full name": "Jhon Doe",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Jhon@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser."full name"); gives error
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof mySym);

JsUser.email = "jhon@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email="jhon@microsoft.com";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}; 

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());



