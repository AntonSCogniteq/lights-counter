import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Colors } from 'src/app/models';
import {getLightLampColor} from 'src/app/utils/getLightLampColor';

@Component({
  selector: 'app-traffic-light-lamp',
  templateUrl: './traffic-light-lamp.component.html',
  styleUrls: ['./traffic-light-lamp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrafficLightLampComponent {
  @Input() size: string;
  @Input() color: Colors;

  get preparedColor() {
    return getLightLampColor(this.color);
  }
}
