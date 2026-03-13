import {Component, input, output} from '@angular/core';
import {IMenuItem} from '../../../shared/interfaces/menu-item';

@Component({
  selector: 'app-menu-item',
  imports: [],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.scss',
})
export class MenuItem {
  readonly item = input.required<IMenuItem>();
  readonly toggled = output<number>();
}
