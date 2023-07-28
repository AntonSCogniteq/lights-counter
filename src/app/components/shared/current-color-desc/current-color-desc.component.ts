import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Colors } from 'src/app/models';

@Component({
  selector: 'app-current-color-desc',
  templateUrl: './current-color-desc.component.html',
  styleUrls: ['./current-color-desc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentColorDescComponent {
  @Input() color: Colors;
}
