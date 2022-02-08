let prev = 0;
let cur = 0;
let op = 0;

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
    if (this.textContent === "back") {
        cur = Math.floor(cur / 10);
        screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
    } else if (this.textContent === "clear") {
        screen.textContent = 0;
        prev = 0;
        cur = 0;
        op = 0;
    }  else if (this.textContent === "=" && op != 0 && cur != 0) {
        prev = operate(prev, cur, op);
        cur = 0;
        op = 0;
        screen.textContent = prev;
    } else if (this.textContent === "." && op === 0) {
        // do decimal and finished
        screen.textContent += ".";
    } else if (!isNaN(this.textContent)) {
        if (cur === 0 || isNaN(screen.textContent) ) {
            screen.textContent = this.textContent;
        } else {
            screen.textContent += this.textContent;
        }
        cur = cur * 10 + (+this.textContent);
    } else {
        if (prev === 0) {
            prev = cur;
        }
        op = this.textContent;
        cur = 0;
        screen.textContent = this.textContent;
    }
    console.log(prev, cur, op);
}

const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
buttons.forEach(button => button.addEventListener('click', compute));

