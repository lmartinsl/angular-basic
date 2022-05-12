import { DepartmentService } from './department.service';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public onNewProduct: EventEmitter<any> = new EventEmitter<any>();

  private nextId: number;
  private dateFromServer: Array<any> = [
    { id: 1, name: 'laptop', department_id: 2, price: 40, description: 'laptop description' },
    { id: 2, name: 'shirt', department_id: 1, price: 10, description: 'shirt description' },
    { id: 3, name: 'mouse', department_id: 3, price: 35, description: 'mouse description' }
  ]
  private products: Array<any> = [];

  constructor(private departmentService: DepartmentService) {
    for (let p of this.dateFromServer) {
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        department: this.departmentService.getDepartmentById(p.id)
      })
      this.nextId = p.id + 1;
    }
  }

  public getProducts(): Array<any> {
    return this.products
  }

  public addProduct(p: any): void {
    const prod = { id: this.nextId, ...p }
    this.products.push(prod)
    this.onNewProduct.emit(prod)
  }
}
