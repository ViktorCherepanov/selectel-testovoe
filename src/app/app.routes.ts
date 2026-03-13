import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then(m => m.Home)
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./features/menu/menu').then(m => m.Menu)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
