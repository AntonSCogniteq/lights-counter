import {OnInit} from '@angular/core';
import { Component } from '@angular/core';
import { TrafficLightsService } from './services/traffic-lights.service';
import { Colors } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public trafficLightsService: TrafficLightsService) {}

  addLight() {
    this.trafficLightsService.addLight();
  }

  setActiveLightCard(id: number) {
    this.trafficLightsService.changeActiveTrafficLight(id);
  }
}
