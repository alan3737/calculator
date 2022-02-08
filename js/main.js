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
        arr.pop();
        screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
    } else if (this.textContent === "clear") {
        arr = [];
        screen.textContent = 0;
    }  else if (this.textContent === "=") {
        let total = 0;
        let value = 0;
        let op = null;
        let dec = 0;
        arr.forEach(function(n) {
            if (n === ".") {
                dec = 10;
            } else if (!isNaN(n)) {
                if (dec > 0) {
                    value = value + (n / dec);
                    dec *= 10;
                } else {
                    value = value * 10 + n;
                }
            } else  {
                if(total === 0) {
                    total = value;
                } else {
                    total = operate(total, value, op);
                }        
                value = 0;
                op = n;
                dec = 0;
            }
        });
        let solu = operate(total, value, op);
        screen.textContent = solu;
        arr = [solu];
    } else if(this.textContent === "." || !isNaN(this.textContent)) {
        if (screen.textContent === "0" || isNaN(screen.textContent)) {
            screen.textContent = "";
        } 
        screen.textContent += this.textContent;
        arr.push(+this.textContent);
    } else {
        arr.push(this.textContent);
        screen.textContent = this.textContent;
    }
}

let arr = []
const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
buttons.forEach(button => button.addEventListener('click', compute));

