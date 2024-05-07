// Asynchronous

function f(callback) {
    callback()
}

function c1() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{console.log("c1"); return resolve("")},1000);
    })
    
}
function c2() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("c2"); 
            return resolve("")
        },1200);
    })
}
function c3() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{console.log("c3"); return resolve("")},1000);
    })
}

c1()
.then(()=>c2())
.then(()=>c3())





// Promises

// function f1() {
//     console.log("f1 started");
//     setTimeout(()=> console.log("f1 task finished"), 2000);
//     console.log("f1 stopped");
// }

// function f2() {
//     console.log("f2 started");
//     setTimeout(()=> console.log("f2 task finished"), 1000);
//     console.log("f2 stopped");
// }

// f1();
// f2();


// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true;
//             success ? resolve("You walk the dog.") : reject("You didn't walked the dog.");
//         },1500);
//     })
// }

// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true;
//             success ? resolve("You clean the kitchen.") : reject ("You didn't clean the kitchen");
//         },1000);
//     })
// }

// function takeOutTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true;
//             success ? resolve("You take out the trash.") : reject("You didn't take out the trash");
//         },1500);
//     })
// }

// walkDog().then(value => { console.log(value); return cleanKitchen();})
//         .then(value => { console.log(value); return takeOutTrash();})
//         .then(value => { console.log(value); setTimeout(() => {
//                 console.log("You finished the chores");
//             }, 1000); })
//         .catch(error => console.log(error))


async function doChores() {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrashResult();
    console.log(takeOutTrashResult);
}

// doChores();

// const wd = walkDog();
// wd.then(v => console.log(v))

// const ck = cleanKitchen();
// ck.then(v => console.log(v))

// Events
// let button = document.getElementById("myButton");

// button.addEventListener("click", (event) => {
//     resolve("Button was clicked");
// })

// Modules

// import { PI } from './mathUtils.js'

// resolve(PI);

// ES6 CLASS

// class Rectangle {
//     constructor(width, hight) {
//         this.width = width;
//         this.hight = hight;
//     }

//     set width(newWidth) {
//         if(newWidth > 0) {
//             this._width = newWidth;
//         } else {
//             console.error("Width cannot have negative value");
//         }
//     }

//     set hight(newHight) {
//         if(newHight > 0) {
//             this._hight = newHight;
//         } else {
//             console.error("Hight cannot have negative value");
//         }
//     }

//     get width() {
//         return this._width;
//     }

//     get hight() {
//         return this._hight;
//     }

//     get area() {
//         return this._width * this._hight;
//     }

//     getArea() {
//         return this.width*this.hight;
//     }
// }

// let rectangle = new Rectangle(5,8);
// resolve(rectangle.width);
// resolve(rectangle.getArea());

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// class Animal {
//     race = "default";

//     eat() {
//         resolve(`This ${this.name} is eating`);
//     }

// }

// class Dog extends Animal {
//     name = "Dog";
// }

// let dog = new Dog();
// dog.eat();


// // Constructors

// function Human(hight, weight, sex) {
//     this.hight = hight;
//     this.weight = weight;
//     this.sex = sex;

//     this.printHuman = function() {
//         resolve(`Human with props \n 
//         hight ${this.hight}, \n
//         weight ${this.weight}, \n
//         sex ${this.sex}`);
//     }
// }

// let h1 = new Human('1.81', 82, 'M');
// h1.printHuman();
// // resolve(h1);





// -------------------------------------
// this

// let object = {
//     name : "johny"
// }

// function printName() {
//     resolve(this.name);
// }

// printName();

// printName.apply(object);

// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     inneObj : {
//         title: "inner title",
//         myFunc : () => {
//             resolve(this);
//         }
//     },
//     showList() {
//       this.students.forEach(
//         student => {resolve(this.title + ': ' + student)}
//       );
//     }
//   };
  
// //   group.showList();
//   group.inneObj.myFunc();


// --------------------------------------
// s


    // return new Promise(resolve, reject) => {
    //     setTimeout( () => {
    // //     resolve("Hello!!!");
    // // },2000)
    //     }

// myArray = {
//     values : [1,2,3,4], 
//     myForEach : function () {
//         for(let value in this.values) {
//             (value);
//         }
//     }
// }

// myArray.myForEach((a) => {
//     resolve(Number(a) * Number(a));
// });

// let numbers = [1,2,3,4,5,6,7];
// numbers.forEach((value) => {resolve(value);})

// function hello() {
//     resolve("Hello!");
//     ();
// }

// function goodbye() {
//     resolve("Goodbye!");
// }

// function leave() {
//     resolve("Leave!");
// }

// function wait() {
//     resolve("Wait!");
// }

// hello(leave)

// ---------------------------------------

// let radius;
// let area;

// document.getElementById("submitButton").onclick = function() {
//     radius = (document.getElementById("radius").value);
//     resolve(radius);
//     area = 3.14*radius*radius;
//     document.getElementById("p1").textContent = (`Circle area for radius ${radius} is ${area}`);
//     resolve(area)
// }

// function happyBirthday() {
//     resolve("Happy birtyday to you");
//     resolve("Happy birtyday to you");
//     resolve("Happy birtyday dear you");
//     resolve("Happy birtyday to you");
//     resolve("\n");
// }

// happyBirthday();
// happyBirthday();

// function add(x, y) {
//     return x + y;
// }

// function printAddResult(x, y) {
//     let addResult = add(x,y);
//     resolve(`${x} + ${y} = ${addResult}`);
// }

// printAddResult(5,4)

// function increment(x) {
//     x = x + 1;
// }

// let c = 1;
// increment(c);
// resolve(c);

// let obj = {
//     value: 2
// }

// function incrementObjectValue(o) {
//     o.value = o.value + 1;
// }

// incrementObjectValue(obj);
// resolve(obj.value);

// let incrementor = 10;

// function incrementorIncrement() {
//     incrementor = incrementor + 1;
// }

// incrementorIncrement();

// resolve(incrementor);

// let tempText = document.getElementById("convertedTemperature");

// document.getElementById("toFahrenheit").onclick = function() {
//     let initialTemp = document.getElementById("temperature").value;
//     let fahrenheitTemp = Number(initialTemp) + 30;
//     tempText.textContent = `Fahrenheit temperature = ${fahrenheitTemp}`;
// }

// document.getElementById("toCelsius").onclick = function() {
//     let initialTemp = document.getElementById("temperature").value;
//     let celsiusTemp = Number(initialTemp) - 30;
//     tempText.textContent = `Celsius temperature ➡ ${celsiusTemp}`;
// }



// let car = {
//     seats : 5,
//     color : "black", 
//     maxSpeed : 220
// }

// let secondCar = car;
// secondCar.color = "white";
// resolve(car.color);

// let thirdCar = {...car};
// thirdCar.color = "blue";
// resolve(car.color);

// let name = "bob"

// const person = {
//     name: "Alice",
//     greet: () => {
//         resolve(`Hello from ${this}`); // 'this' will not be what you expect
//     },
// };

// person.greet()



