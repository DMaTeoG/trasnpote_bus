import { Component, OnInit } from '@angular/core';
import { Bus, initialBuses } from './buses';

import { StatsComponent } from './components/stats/stats';
import { MapComponent } from './components/map/map';
import { AlertsComponent } from './components/alerts/alerts';
import { BusListComponent } from './components/bus-list/bus-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    StatsComponent,
    MapComponent,
    AlertsComponent,
    BusListComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  buses: Bus[] = initialBuses;

  ngOnInit() {

    setInterval(() => {

      this.buses = this.buses.map(bus => ({
        ...bus,

        posicion:
          bus.posicion +
          Math.random() * 2,

        intervalo:
          Math.max(
            1,
            bus.intervalo +
            (Math.random() - 0.5) * 2
          )
      }));

    }, 1000);
  }
}