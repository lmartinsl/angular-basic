import { DepartmentService } from './../department.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public departments: Array<string> = [];

  public name: string;
  public department: string;
  public description: string;
  public price: number;

  constructor(
    private productService: ProductService,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments();
  }

  public save(): void {
    this.productService.addProduct({
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department
    })
    this.clear();
  }
  public clear(): void {
    this.name = ''
    this.price = 0
    this.description = ''
    this.department = null
  }

}
