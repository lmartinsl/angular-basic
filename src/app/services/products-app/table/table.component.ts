import { ProductService } from './../product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ViewChild(MatTable) dataTable: MatTable<any>;
  public prodColumns: Array<string> = ['id', 'name', 'department', 'price', 'description'];
  public products: Array<any> = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productService.onNewProduct.subscribe((prod) => {
      this.dataTable.renderRows()
    })
  }

}
