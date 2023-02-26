import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: any[];

  constructor() {
    this.cars = JSON.parse(localStorage.getItem('cars') || '[]');
  }

  selectCar(car: any) {
    localStorage.setItem('selectedCar', JSON.stringify(car));
  }

  ngOnInit(): void {
  }

}
