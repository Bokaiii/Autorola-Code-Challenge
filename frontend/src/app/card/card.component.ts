import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarDTO } from '../../typings';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarService } from '../services/CarService';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() public car?: CarDTO;
  @Output() editCar = new EventEmitter<CarDTO>();
  @Output() deleteCar = new EventEmitter<string>();

  constructor(
    private modalService: NgbModal,
    private carService: CarService
  ) { }

  public edit(): void {
    this.editCar.emit(this.car);
  }

  public delete($event: MouseEvent): void {
    $event.stopPropagation();
    this.deleteCar.emit(this.car?.vin);
  }
}
