import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cars: any[];

  constructor() {
    this.cars = JSON.parse(localStorage.getItem('cars') || '[]');
  }

  selectCar(car: any) {
    localStorage.setItem('selectedCar', JSON.stringify(car));
  }
}
