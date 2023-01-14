
console.log("hello");

function addition(num1, num2) {
    return num1 + num2
};

console.log(addition(3, 5));

const add = (numA, numB) => {
    return numA + numB
};

console.log(add(-3, -6));

function hoursIntoSeconds(h) {
    return h * 3600
};

console.log(hoursIntoSeconds(4.5));

const hoursSeconds = (h) => {
    return h * 3600
};

console.log(hoursSeconds(24));

const what20min = (FTP) => {
    return (FTP / 95) * 100
};

console.log(what20min(280));

function perimeter(l, w) {
    return (2 * l) + (2 * w)
};

console.log(perimeter(6, 7));

const per = (l, w) => {
    return (2 * l) + (2 * w)
};

console.log(per(2, 9));

function triangle(b, h) {
    return 0.5 * b * h
};

console.log(triangle(3, 2));

const tri = (b, h) => {
    return 0.5 * b * h
};

console.log(tri(10, 10));

function frontend(string) {
    return string + "Frontend"
};

console.log(frontend("Apple"));

const extend = (string) => {
    return string + "Frontend"
};

console.log(extend("Banana"));

function greater100(num1, num2) {
    return num1 + num2 > 100
};

console.log(greater100(50, 70));

const sumNum100 = (num1, num2) => {
    return num1 + num2 > 100
};

console.log(sumNum100(70, 10));

function lessThanEqualZero(num) {
    return num <= 0
};

console.log(lessThanEqualZero(-5));

const lessThanEqual0 = (num) => {
    return num <= 0
};

console.log(lessThanEqual0(6));

function oppositeBoolean(b) {
    return !b
};

console.log(oppositeBoolean(7));

const not0 = (num) => {
    return num !== 0 
};

console.log(not0(null))

function remainder(num1, num2) {
    return num1 % num2 
};

console.log(remainder(7, 8));

const isOdd = (num) => {
    return num % 2 === 1   
};

console.log(isOdd(3));

function isEven(num) {
    return num % 2 === 0 ? 1 : -1
};

console.log(isEven(2));

const logAndSub = (log, sub) => {
    return log === "LOGGED_IN" || sub === "SUBSCRIBED"
};

console.log(logAndSub("LOGGED_IN", "SUBSCRIBED"));