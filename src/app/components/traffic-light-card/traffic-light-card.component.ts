import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TrafficLight, Colors } from 'src/app/models';

@Component({
  selector: 'app-traffic-light-card',
  templateUrl: './traffic-light-card.component.html',
  styleUrls: ['./traffic-light-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrafficLightCardComponent {
  @Input() lightName: string;
  @Input() lightColor: Colors;
  @Input() isActive: boolean;
  @Output() onClick = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }
}
