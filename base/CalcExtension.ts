import { Calculator } from "./calculator";

type Operation = "+" | "-" | "*" | "/" ;

export class CalcExtension implements Calculator{
    private value: number;
    constructor(){
        this.value =  0;
    }
    
    private CalcLogic(first: number, operation:Operation, second: number): number{
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
    }
    public calculate(first: number, operation:Operation, second: number){
        let result = this.CalcLogic(first, operation, second);
        this.value = result;
    }
   
    sum(first: number, second: number): number {
       return first + second;
    }
    subtract(first: number, second: number): number {
        return first - second;
    }
    multiply(first: number, second: number): number {
        return first * second;
    }
    divide(first: number, second: number): number {
        return first / second;
    }
    showValue(): void {
        //retorna o valor;
        console.log(this.value);
    }

}