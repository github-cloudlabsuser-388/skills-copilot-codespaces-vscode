const assert = require('assert');
const Calculator = require('./test');

describe('Calculator', function() {
    let calculator;

    beforeEach(function() {
        calculator = new Calculator();
    });

    it('should start with a current value of 0', function() {
        assert.equal(calculator.getValue(), 0);
    });

    it('should add a number to the current value', function() {
        calculator.add(5);
        assert.equal(calculator.getValue(), 5);
    });

    it('should subtract a number from the current value', function() {
        calculator.subtract(3);
        assert.equal(calculator.getValue(), -3);
    });

    it('should multiply the current value by a number', function() {
        calculator.add(5); // set current value to 5
        calculator.multiply(2);
        assert.equal(calculator.getValue(), 10);
    });

    it('should divide the current value by a number', function() {
        calculator.add(10); // set current value to 10
        calculator.divide(2);
        assert.equal(calculator.getValue(), 5);
    });

    it('should not divide by zero', function() {
        calculator.add(10); // set current value to 10
        calculator.divide(0);
        assert.equal(calculator.getValue(), 10);
    });
});