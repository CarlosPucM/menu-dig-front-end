import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard/dashboard.module').then(m => m.DashboardModule) }, 
  { path: 'landing', loadChildren: () => import('./components/landing/landing.module').then(m => m.LandingModule) },
  { path: 'menu', loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule) },
  { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '**', redirectTo: 'landing', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
