console.log("Hello")

let firstName = "John";
let age = 27;
let isOnline = true;

console.log(`You are ${age} years old, ${firstName}.`);
if(isOnline) {
    document.getElementById("p1").textContent = `${firstName} is online`;
} else {
    document.getElementById("p2").textContent = `${firstName} is offline`;
}

document.getElementById('myH1').textContent = 'Hello, John!';
document.getElementById('myP').textContent = 'Some text.';