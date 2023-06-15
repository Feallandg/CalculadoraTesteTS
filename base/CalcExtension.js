"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcExtension = void 0;
var CalcExtension = /** @class */ (function () {
    function CalcExtension() {
        this.value = 0;
    }
    CalcExtension.prototype.CalcLogic = function (first, operation, second) {
        switch (operation) {
            case "+":
                return this.sum(first, second);
            case "-":
                return this.subtract(first, second);
            case "/":
                return this.divide(first, second);
            case "*":
                return this.multiply(first, second);
            default:
                break;
        }
        return 0;
    };
    CalcExtension.prototype.calculate = function (first, operation, second) {
        var result = this.CalcLogic(first, operation, second);
        this.value = result;
    };
    CalcExtension.prototype.sum = function (first, second) {
        return first + second;
    };
    CalcExtension.prototype.subtract = function (first, second) {
        return first - second;
    };
    CalcExtension.prototype.multiply = function (first, second) {
        return first * second;
    };
    CalcExtension.prototype.divide = function (first, second) {
        return first / second;
    };
    CalcExtension.prototype.showValue = function () {
        //retorna o valor;
        console.log(this.value);
    };
    return CalcExtension;
}());
exports.CalcExtension = CalcExtension;
