

// Task 1

let a = +prompt("First Value", "Enter Number ");
let b = +prompt("Second Value", "Enter Number ");
if (a > b) {
    console.log("First One is Large Value is", a);
} else {
    console.log("Second One is Large Value is", b);

}
// ---------------------x------------
// Task 2

let c = +prompt("Check Positive or Negative Number", "Enter Number ");
if (c >= 0) {
    alert("The Sign is +")
} else {
    alert("The Sign is -")
}

// ---------------------x------------
// Task 3

let value1 = +prompt("Check large Between 1-5", "Enter Number")
let value2 = +prompt("Check large Between 1-5", "Enter Number")
let value3 = +prompt("Check large Between 1-5", "Enter Number")
let value4 = +prompt("Check large Between 1-5", "Enter Number")
let value5 = +prompt("Check large Between 1-5", "Enter Number")
let high = 0
if (value2 > value1) {
    high = value2;
} if (value3 > value2) {
    high = value3;
}
if (value4 > value3) {
    high = value4;
} if (value5 > value4) {
    high = value5;
}
console.log(high)


// ---------------------x------------
// Task 4

for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is even`)
    } else {
        console.log(`${i} is odd`)

    }
}

// ---------------------x------------
// Task 5

let subj1 = +prompt("Enter Maths Number", "Enter Marks")
let subj2 = +prompt("Enter English Number", "Enter Marks")
let subj3 = +prompt("Enter Urdu Number", "Enter Marks")
let avg = (subj1 + subj2 + subj3) / 3
if (avg > 90) {
    alert("Grade is A")
} else if (90 > avg && avg > 80) {
    alert("Grade is B")
}
else if (80 > avg && avg > 70) {
    alert("Grade is C")
}
else if (70 > avg && avg > 60) {
    alert("Grade is D")
}
else if (60 > avg) {
    alert("Grade is F")
} else {
    alert("Some Number Missed")
}

// ---------------------x------------
// Task 6

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 !== 0) {
        console.log("Fizz")
    } else if (i % 3 !== 0 && i % 5 == 0) {
        console.log("Buzz")
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")

    }
}

// ---------------------x------------
// Task 7

let fig = +prompt("Enter Length of Triangle", "Enter Number");
for (let i = 1; i <= fig; i++) {
    let draw = "";
    for (let j = 0; j < i; j++) {
        draw = "*" + draw
    }
    console.log(draw)
}
