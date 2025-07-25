// Name and User Password
let username = prompt("Enter your username (admin or user)");
let password = prompt("Enter your password");

let role;
let securityLevel;

if ((username === "admin" || username === "user") && password === "1234") {
    role = username;
    securityLevel = (username === "admin") ? "high" : "low";
    alert(`Welcome ${username}!`)
} else {
    alert("Invalid credentials. Access denied.")
    throw new Error("Acces denid");
}

//Order Coffee
let customerName = prompt("What is your name?");
let age = Number(prompt("What is your age?"));
let coffeeType = prompt("What coffee would you like?(espresso, cappuccino, latte)").toLowerCase();
let quantity = Number(prompt("How many cups would you like?"));

let pricePerCup;

switch (coffeeType) {
    case "espresso":
        pricePerCup = 2.5;
        break;
    case "cappuccino":
        pricePerCup = 4.0;
        break;
    case "latte":
        pricePerCup = 3.5;
        break;
    default:
        alert("Invalid coffee type. Please refresh and and try again.");
        throw new Error("Invalid coffee type");
}

let originalTotal = pricePerCup * quantity;
let discount = 0;

if (age < 18 || age > 60) {
    discount = originalTotal * 0.10;
}
let finalTotal = originalTotal - discount;

//Bill splitter with Tip
let people = Number(prompt("How many people are splitting the bill? (1, 2 or 3)"));
let tipPercent = Number(prompt("Tip percentage?(0, 5, 10 or 15)"));

if (![1, 2, 3].includes(people) || ![0, 5, 10, 15].includes(tipPercent)) {
    alert("Invalid input for bill splitting or tip. Please refresh and try again.");
    throw new Error("Invalid split or tip input");
}

let tipAmount = (finalTotal * tipPercent) / 100;
let totalWithTip = finalTotal + tipAmount;
let perPerson = totalWithTip / people;

let message =
    `Hello ${customerName}
  You order ${quantity} ${coffeeType}(s).
  Original total: $${originalTotal.toFixed(2)}
  Discount: $${discount.toFixed(2)}
  Tip: $${tipAmount.toFixed(2)}
  Total with Tips: $${totalWithTip.toFixed(2)}
  split between ${people} people: $${perPerson.toFixed(2)} each`;

alert(message);
console.log(message);