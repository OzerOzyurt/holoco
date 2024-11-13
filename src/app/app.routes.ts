import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
    {
        path:'', component: HomeComponent
    },

    {
        path:'hakkımızda' , loadComponent: () => import ('../components/about/about.component').then((m)=>m.AboutComponent)
    },
    {
        path: '404',
        loadComponent: () =>
          import('../components/notfound/notfound.component').then(
            (m) => m.NotfoundComponent
          ),
      },
      {
        path: '**',
        redirectTo: '/404',
      },
];
