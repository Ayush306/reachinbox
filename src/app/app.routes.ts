import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    loadComponent:()=>import('./login/login.component').then(t=>t.LoginComponent)
  },
  {
    path:'layout',
    loadComponent:()=>import('./layout/layout.component').then(t=>t.LayoutComponent)
  },

];
