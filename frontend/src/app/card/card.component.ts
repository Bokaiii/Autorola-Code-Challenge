import { Component, Input } from '@angular/core';
import { CarDTO } from '../../typings';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() public car?: CarDTO;
}
