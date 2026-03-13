import {IMenuItem} from './menu-item';

export interface IMenuGroup {
  id: number;
  title: string;
  items: IMenuItem[];
}
