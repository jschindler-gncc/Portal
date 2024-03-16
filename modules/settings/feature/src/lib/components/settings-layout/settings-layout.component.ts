import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-settings-layout',
  templateUrl: './settings-layout.component.html',
  styleUrls: ['./settings-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsLayoutComponent {}
