import { Component, Input } from '@angular/core';
import { MenuEntity } from 'dashboard-data-access';

@Component({
  selector: 'dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss'],
})
export class DashboardMenuComponent {
  @Input() config!: MenuEntity;
}