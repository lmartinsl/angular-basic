import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  public depName: string;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
  }

  public save(): void {
    this.departmentService.addDepartments(
      { name: this.depName }
    )
    this.clear();
  }
  public clear(): void {
    this.depName = '';
  }

}
