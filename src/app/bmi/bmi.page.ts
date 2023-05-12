import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: ['./bmi.page.scss'],
})
export class BmiPage {
  height!: number;
  weight!: number;
  bmiResult!: number;

  calculateBMI() {
    const heightInMeters = this.height / 100;
    this.bmiResult = this.weight / (heightInMeters * heightInMeters);
  }
}
