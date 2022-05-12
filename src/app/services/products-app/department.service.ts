import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private nextId: number = 4
  private departments: Array<any> = [
    { id: 1, name: 'Clothing' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Computers' },
  ]

  constructor() { }

  public getDepartments(): Array<any> {
    return this.departments
  }

  public addDepartments(d: any): void {
    this.departments.push({ id: this.nextId++, ...d })
  }

  public getDepartmentById(id: number): any {
    return this.departments.find((d) => d.id === id)
  }
}
