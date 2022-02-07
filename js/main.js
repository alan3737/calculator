const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    if (b == 0) {
        return "error";
    }
    return a / b;
}

const operate = function(a, b, op) {
    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

const compute = function (e) {
    if (this.textContent === "clear") {
        arr = [];
        value = 0;
        dec = 0;
        screen.textContent = 0;
    } else if (this.textContent in {'+': true, '-': true, '*':true, '/': true}) {
        arr.push([value, this.textContent]);
        value = 0;
        dec = 0;
        screen.textContent = this.textContent;
    } else if (this.textContent === "=") {
        let op = null;
        let num = arr.reduce(function(t,v) {
            if(op === null) {
                op = v[1];
                return v[0];   
            } else {
                let m = operate(t, v[0], op);
                op = v[1];
                return m
            }
        }, 0);
        screen.textContent = operate(num, value, op);
        value = 0;
        dec = 0;
        arr = [];
    } else if (this.textContent === "."){
        dec = 10;
        screen.textContent += ".";
    } else {
        if (dec > 0) {
            value += (this.textContent / dec);
            dec *= 10;
        } else {
            value = value * 10 + (+this.textContent);
        }
        screen.textContent = value;
    }
}
let arr = []
let value = 0;
let dec = 0;

const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");



buttons.forEach(button => button.addEventListener('click', compute));

// object of number and op
// 1:+, 2:-, 5:*, 10:=

