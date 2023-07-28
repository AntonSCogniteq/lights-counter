import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Colors } from 'src/app/models';

@Component({
  selector: 'app-light-toggler',
  templateUrl: './light-toggler.component.html',
  styleUrls: ['./light-toggler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightTogglerComponent {
  @Input() currentColor: Colors;
  @Output() onColor = new EventEmitter();

  red: Colors = Colors.Red;
  orange: Colors = Colors.Orange;
  green: Colors = Colors.Green;
  gray: Colors = Colors.Idle;

  emitColor(color: Colors) {
    this.onColor.emit(color);
  }
}
