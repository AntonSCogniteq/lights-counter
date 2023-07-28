import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Colors } from 'src/app/models';
import { getLightLampColor } from 'src/app/utils/getLightLampColor';

@Component({
  selector: 'app-color-statistics',
  templateUrl: './color-statistics.component.html',
  styleUrls: ['./color-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorStatisticsComponent {
  @Input() quantity: number;
  @Input() colorName: Colors;

  get preparedColor() {
    return getLightLampColor(this.colorName);
  }
}
