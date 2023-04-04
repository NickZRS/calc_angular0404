import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
       num1: number = 0;
       num2: number = 0;
       resp: number = 0;

       somar(){
        this.resp = this.num1 + this.num2;
       }
       subtrair(){
        this.resp = this.num1 - this.num2;
       }
       multiplicar(){
        this.resp = this.num1 * this.num2;
       }
       dividir(){
        this.resp = this.num1 / this.num2;
       }
}
