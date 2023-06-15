import { CalcExtension } from "./base/CalcExtension";

let calc = new CalcExtension();
calc.calculate(1, "+", 9);//soma
calc.showValue();

calc.calculate(1, "-", 11);//subtract
calc.showValue();

calc.calculate(5, "*", 5);//multiply
calc.showValue();

calc.calculate(10, "/", 5);//divide
calc.showValue();