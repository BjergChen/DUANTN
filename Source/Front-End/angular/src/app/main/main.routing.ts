import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: "", component: MainComponent, children: [
    { path: "dashboard", loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
  ]},
];

export const MainRoutes = RouterModule.forChild(routes);
