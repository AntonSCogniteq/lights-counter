import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-lights',
  templateUrl: './total-lights.component.html',
  styleUrls: ['./total-lights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalLightsComponent {
  @Input() numberOfLights: number;
}
