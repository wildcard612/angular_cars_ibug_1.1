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
  services: any[] = [];

  constructor() {
    this.newPart = '';
    this.newCost = 0;
  }

  ngOnInit(): void {
    this.car = JSON.parse(localStorage.getItem('selectedCar') || '{}');
    this.services = this.car.services || [];
  }

  addService() {
    if (!this.car.services) {
      this.car.services = [];
    }
    this.car.services.push({
      part: this.newPart,
      cost: this.newCost
    });
    localStorage.setItem('selectedCar', JSON.stringify(this.car));
    this.services = this.car.services;
    this.newPart = '';
    this.newCost = 0;
  }

}
