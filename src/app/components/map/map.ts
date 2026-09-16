import { Component, Input } from '@angular/core';
import { Bus } from '../../buses';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class MapComponent {

  @Input() buses: Bus[] = [];

  getTop(bus: Bus) {

    if (bus.ruta === 'R07')
      return '25%';

    if (bus.ruta === 'R03')
      return '50%';

    return '75%';
  }
}