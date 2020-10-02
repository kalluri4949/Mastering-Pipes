import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  decimal: number;
  miles: number;
  car = {
    make: 'mini',
    color: 'orange',
    model: 'sport',
  };
  onNameChange(value: string): void {
    this.name = value;
  }
  onDateChange(date: string): void {
    this.date = date;
  }
  onAmountChange(value: string): void {
    this.amount = parseFloat(value);
  }
  onDecimalChange(value: string): void {
    this.decimal = parseFloat(value);
  }
  onMilesChange(value: string): void {
    this.miles = parseFloat(value);
  }
}
