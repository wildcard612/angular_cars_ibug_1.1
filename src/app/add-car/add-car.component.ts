import { Component } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  make: string;
  model: string;

  constructor() {
    this.make = '';
    this.model = '';
  }

  addCar() {
    const newCar = { make: this.make, model: this.model };
    console.log(newCar); // sprawdzenie wartości zmiennej newCar
    const cars = JSON.parse(localStorage.getItem('cars') || '[]');
    cars.push(newCar);
    localStorage.setItem('cars', JSON.stringify(cars));
    console.log(localStorage.getItem('cars')); // sprawdzenie wartości zapisanych w localStorage
    this.make = '';
    this.model = '';
  }
  
}
