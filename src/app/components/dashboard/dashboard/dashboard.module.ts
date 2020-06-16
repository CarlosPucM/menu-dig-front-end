import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenudashboardComponent } from '../menudashboard/menudashboard.component';
import { GroupsComponent } from '../groups/groups.component';
import { ProductsComponent } from '../products/products.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MenudashboardComponent,
    GroupsComponent,
    ProductsComponent
  ],
  exports:[
    MenudashboardComponent,
    GroupsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
