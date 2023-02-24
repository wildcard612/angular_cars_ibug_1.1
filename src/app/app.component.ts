import { Component } from '@angular/core';
import { AddCarComponent } from './add-car/add-car.component';


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
