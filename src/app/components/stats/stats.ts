import { Component, Input } from '@angular/core';
import { Bus } from '../../buses';

@Component({
  selector: 'app-stats',
  standalone: true,
  templateUrl: './stats.html',
  styleUrl: './stats.css'
})
export class StatsComponent {

  @Input() buses: Bus[] = [];

  get bunching() {
    return this.buses.filter(
      bus => bus.intervalo < 2.4
    ).length;
  }

  get huecos() {
    return this.buses.filter(
      bus => bus.intervalo > 9.6
    ).length;
  }

  get normales() {
    return this.buses.length -
      this.bunching -
      this.huecos;
  }
}