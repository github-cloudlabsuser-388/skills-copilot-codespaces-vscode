// Calculator constructor function
function Calculator() {
    this.currentValue = 0;
}

// Method to add a number to the current value
Calculator.prototype.add = function (number) {
    this.currentValue += number;
};

// Method to subtract a number from the current value
Calculator.prototype.subtract = function (number) {
    this.currentValue -= number;
};

// Method to multiply the current value by a number
Calculator.prototype.multiply = function (number) {
    this.currentValue *= number;
};

// Method to divide the current value by a number
Calculator.prototype.divide = function (number) {
    if (number !== 0) {
        this.currentValue /= number;
    } else {
        console.log("Error: Cannot divide by zero");
    }
};

// Method to get the current value
Calculator.prototype.getValue = function () {
    return this.currentValue;
};

// Create a new instance of the Calculator
const calculator = new Calculator();

// Example usage
calculator.add(5);
calculator.multiply(2);
calculator.subtract(3);
calculator.divide(2);

console.log("Current value:", calculator.getValue());