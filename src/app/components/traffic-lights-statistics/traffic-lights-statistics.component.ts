import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Colors, TrafficLight } from 'src/app/models';

@Component({
  selector: 'app-traffic-lights-statistics',
  templateUrl: './traffic-lights-statistics.component.html',
  styleUrls: ['./traffic-lights-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrafficLightsStatisticsComponent {
  @Input() trafficLights: TrafficLight[];

  red = Colors.Red;
  orange = Colors.Orange;
  green = Colors.Green;

  getNumberOfRedLights() {
    return this.trafficLights.filter((light) => light.color === Colors.Red)
      .length;
  }

  getNumberOfOrangeLights() {
    return this.trafficLights.filter((light) => light.color === Colors.Orange)
      .length;
  }

  getNumberOfGreenLights() {
    return this.trafficLights.filter((light) => light.color === Colors.Green)
      .length;
  }
}
