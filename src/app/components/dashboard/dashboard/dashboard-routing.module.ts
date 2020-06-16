import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MenudashboardComponent } from '../menudashboard/menudashboard.component';
import { GroupsComponent } from '../groups/groups.component';
import { ProductsComponent } from '../products/products.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, 
  children: [
    { path: '', redirectTo: 'menus', pathMatch: 'full' },
    { path: 'menus', component: MenudashboardComponent },
    { path: 'groups', component: GroupsComponent },
    { path: 'products', component: ProductsComponent }
  ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
