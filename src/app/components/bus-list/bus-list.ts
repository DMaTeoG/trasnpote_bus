import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Bus } from '../../buses';

@Component({
  selector: 'app-bus-list',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './bus-list.html',
  styleUrl: './bus-list.css'
})
export class BusListComponent {

  @Input() buses: Bus[] = [];

  estado(bus: Bus) {

    if (bus.intervalo < 2.4)
      return 'Bunching';

    if (bus.intervalo > 9.6)
      return 'Hueco';

    return 'Normal';
  }
}