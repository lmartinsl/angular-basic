import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductI } from './../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<ProductI[]> {
    return this.http.get<ProductI[]>(`${this.url}/products`)
  }

  public getProductsError(): Observable<ProductI[]> {
    return this.http.get<ProductI[]>(`${this.url}/productserr`)
  }

  public getProductsDelay(): Observable<ProductI[]> {
    return this.http.get<ProductI[]>(`${this.url}/productsdelay`)
  }

  public getProductsIDs(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}/products_ids`)
  }

  public getProductName(id: string): Observable<string> {
    return this.http.get(`${this.url}/products/name/${id}`, {
      responseType: 'text'
    })
  }

  public saveProduct(p: ProductI): Observable<ProductI> {
    return this.http.post<ProductI>(`${this.url}/products`, p)
  }

  public deleteProduct(p: ProductI): Observable<{}> {
    return this.http.delete<{}>(`${this.url}/products/${p._id}`)
  }

  public editProduct(p: ProductI): Observable<ProductI> {
    return this.http.patch<ProductI>(`${this.url}/products/${p._id}`, p)
  }
}
