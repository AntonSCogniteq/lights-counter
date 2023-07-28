import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryBtnComponent {
  @Input() color: 'green' | 'red';
}
