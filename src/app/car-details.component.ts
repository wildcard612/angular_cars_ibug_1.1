import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})

export class CarDetailsComponent implements OnInit {

  car: any;
  newPart: string;
  newCost: number;

  constructor() {
    this.newPart = '';
    this.newCost = 0;
  }  

  ngOnInit(): void {
    this.car = JSON.parse(localStorage.getItem('selectedCar') || '{}');
  }

  addService() {
    if (!this.car.services) {
      this.car.services = [];
    }
    this.car.services.push({
      part: this.newPart,
      cost: this.newCost
    });
    localStorage.setItem('cars', JSON.stringify([this.car]));
    this.newPart = '';
    this.newCost = this.newCost ?? 0;

  }
}
