import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(private _breadcrumb: BreadcrumbService) { 
    this._breadcrumb.navigation = "Grupos";
  }

  ngOnInit(): void {
  }

}
