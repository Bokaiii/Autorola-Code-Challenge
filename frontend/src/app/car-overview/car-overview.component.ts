import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from '../card/card.component';
import { CarService } from '../services/CarService';
import { CarDTO } from '../../typings';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-car-overview',
    standalone: true,
    templateUrl: './car-overview.component.html',
    styleUrl: './car-overview.component.scss',
    imports: [HeaderComponent, CardComponent, CommonModule]
})
export class CarOverviewComponent implements OnInit {
  
  public carList?: CarDTO[];

  constructor(
    private carService: CarService
  ){}

  ngOnInit(): void {
    this.carService.get().subscribe(cars => {
      this.carList = cars;
    });
  }
  
}
