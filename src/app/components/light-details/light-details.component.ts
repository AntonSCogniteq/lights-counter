import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TrafficLightsService } from 'src/app/services/traffic-lights.service';
import { Colors } from 'src/app/models';

@Component({
  selector: 'app-light-details',
  templateUrl: './light-details.component.html',
  styleUrls: ['./light-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightDetailsComponent {
  constructor(public trafficLightsService: TrafficLightsService) {}

  applyColor(color: Colors) {
    this.trafficLightsService.changeLightColor(color);
  }

  removeLight() {
    this.trafficLightsService.deleteLight();
  }
}
