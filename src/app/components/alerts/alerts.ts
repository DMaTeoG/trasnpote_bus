import { Component, Input } from '@angular/core';
import { Bus } from '../../buses';

@Component({
  selector: 'app-alerts',
  standalone: true,
  templateUrl: './alerts.html',
  styleUrl: './alerts.css'
})
export class AlertsComponent {

  @Input() buses: Bus[] = [];

  get alertas() {
    return this.buses.filter(
      bus =>
        bus.intervalo < 2.4 ||
        bus.intervalo > 9.6
    );
  }
}