import {computed, Injectable, signal} from '@angular/core';
import MENU_DATA from '../../data/menu.json';
import {IMenuGroup} from '../../shared/interfaces/menu-group';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  readonly menuGroups = signal<IMenuGroup[]>(MENU_DATA as IMenuGroup[]);
  readonly activeGroupId = signal<number>(1);

  readonly activeGroup = computed(() =>
    this.menuGroups().find(g => g.id === this.activeGroupId())!
  );

  readonly selectedItems = computed(() =>
    this.activeGroup().items.filter(item => item.selected)
  )

  readonly selectedCount = computed(() => this.selectedItems().length)

  readonly totalValue = computed(() =>
    this.selectedItems().reduce((sum, item) => sum + item.value, 0)
  );

  setActiveGroup(id: number): void {
    this.activeGroupId.set(id);
  }

  toggle(itemId: number): void {
    this.menuGroups.update(groups =>
      groups.map(group =>
        group.id === this.activeGroupId() ?
          {
            ...group, items: group.items.map(item =>
              item.id === itemId ? {...item, selected: !item.selected} : item)
          } : group
      )
    )
  }
}
