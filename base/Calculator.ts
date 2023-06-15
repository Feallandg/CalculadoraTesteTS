export interface Calculator{
    sum(first: number, second: number): number;
    subtract(first: number, second: number): number;
    multiply(first: number, second: number): number;
    divide(first: number, second: number): number;
    showValue(): void;
}