// src/app/tabs/tabs.routes.ts
import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio', // Alterado de tab1
        loadComponent: () =>
          import('../inicio/inicio.page').then((m) => m.InicioPage), // Alterado
      },
      {
        path: 'perfil', // Alterado de tab2
        loadComponent: () =>
          import('../perfil/perfil.page').then((m) => m.PerfilPage), // Alterado
      },
      {
        path: 'repositorios', // Alterado de tab3
        loadComponent: () =>
          import('../repositorios/repositorios.page').then((m) => m.RepositoriosPage), // Alterado
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full',
  },
];
