import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _breadcrumb: BreadcrumbService) { 
    this._breadcrumb.navigation = "Productos";
  }

  ngOnInit(): void {
  }

}
