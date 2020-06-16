import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-menudashboard',
  templateUrl: './menudashboard.component.html',
  styleUrls: ['./menudashboard.component.css']
  // './../../../../assets/dashboard/css/dashboard.style.css'
})
export class MenudashboardComponent implements OnInit {

  constructor(private _breadcrumb: BreadcrumbService) { 
    this._breadcrumb.navigation = "Menús";
  }

  ngOnInit(): void {
  }

}
