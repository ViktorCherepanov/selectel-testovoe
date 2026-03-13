import {Component, inject} from '@angular/core';
import {MenuService} from '../../core/services/menu-service';
import {MenuItem} from './menu-item/menu-item';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    MenuItem,
    RouterLink
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  protected menuService = inject(MenuService);

  protected readonly MenuService = MenuService;
}
