import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from '../card/card.component';
import { CarService } from '../services/CarService';
import { CarDTO } from '../../typings';
import { CommonModule } from '@angular/common';
import { NewCarModalComponent } from '../new-car-modal/new-car-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    private carService: CarService,
    private modalService: NgbModal
  ){}

  ngOnInit(): void {
    this.carService.get().subscribe(cars => {
      this.carList = cars;
    });
  }
  
  public newCar(): void {
    this.modalService.open(NewCarModalComponent).result.then(
      (result: CarDTO) => {
        this.carService.createCar(result).subscribe(carDto => {
          this.carList?.push(carDto);
        });
      },
      (reason) => {
        console.log(reason);
      });
  }

  public editCar(carDto: CarDTO): void {
    const modal = this.modalService.open(NewCarModalComponent);
        
    modal.componentInstance.car = carDto;
    modal.result.then(
      (result) => {
        this.carService.updateCar(result).subscribe((carDto) => {
          location.reload();
        });
      },
      (reason) => {
        console.log("Cancelled");
      }
    )
  }

  public deleteCar(vin: string): void {
    this.carService.deleteCar(vin).subscribe();
    location.reload();
  }
}
