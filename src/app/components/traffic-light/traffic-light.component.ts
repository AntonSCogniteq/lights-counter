
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Colors } from 'src/app/models';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrafficLightComponent {
  @Input() activeColor: Colors;

  red: Colors = Colors.Red;
  orange: Colors = Colors.Orange;
  green: Colors = Colors.Green;
  gray: Colors = Colors.Idle;
}
