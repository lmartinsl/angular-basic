import { filter, switchMap } from 'rxjs/operators';
import { DialogEditComponent } from './../dialog-edit/dialog-edit.component';
import { Observable } from 'rxjs';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ProductI } from '../interfaces/product.interface';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public simpleRequestProductsObs$: Observable<ProductI[]>;
  public productsErrorHandling: ProductI[];
  public productsLoading: ProductI[];
  public productsIDs: ProductI[];
  public newlyProducts: ProductI[] = [];
  public productsToDelete: ProductI[] = [];
  public productsToEdit: ProductI[] = [];
  public bLoading: boolean = false;

  constructor(
    private productsService: ProductsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public getSimpleHttpRequest(): void {
    this.simpleRequestProductsObs$ = this.productsService.getProducts()
  }

  public getProductsWitchErrorHandling(): void {

    this.productsService.getProductsError()
      .subscribe(
        (prods: ProductI[]) => this.productsErrorHandling = prods,
        (err) => {
          let config = new MatSnackBarConfig()
          config.duration = 2000
          config.panelClass = ['snackError']

          if (err.status === 0) {
            this.snackBar.open('Could not connect to the server.', '', config)
          } else {
            this.snackBar.open(err.error.msg, '', config)
          }
        }
      )
  }

  public getProductsWitchErrorHandlingOk(): void {
    this.productsService.getProductsDelay()
      .subscribe((prods: ProductI[]) => {
        this.productsErrorHandling = prods
        let config = new MatSnackBarConfig()
        config.duration = 2000
        config.panelClass = ['snackOk']
        this.snackBar.open('Products Successfuly loaded!', '', config)
      });
  }

  public getProductsLoading(): void {
    this.bLoading = true
    this.productsService.getProductsDelay()
      .subscribe(
        (prods: ProductI[]) => {
          this.productsLoading = prods
          this.bLoading = false
        },
        (err) => this.bLoading = false
      )
  }

  public getProductsdIDs(): void {
    this.productsService.getProductsIDs()
      .subscribe((ids: string[]) => {
        this.productsIDs = ids.map(id => ({ _id: id, name: '', department: '', price: 0 }))
      })
  }

  public loadNameProduct(id: string): void {
    this.productsService.getProductName(id)
      .subscribe((prodName: string) => {
        let index = this.productsIDs.findIndex(prod => prod._id === id)
        if (index >= 0) {
          this.productsIDs[index].name = prodName
        }
      })
  }

  public saveProduct(name: string, department: string, price: number): void {
    let p = { name, department, price }
    this.productsService.saveProduct(p)
      .subscribe(
        (p: ProductI) => {
          console.log(p)
          this.newlyProducts.push(p)
        },
        (err) => {
          let config = new MatSnackBarConfig()
          config.duration = 2000
          config.panelClass = ['snackError']

          if (err.status === 0) {
            this.snackBar.open('Could not connect to the server.', '', config)
          } else {
            this.snackBar.open(err.error.msg, '', config)
          }
        }
      )
  }

  public loadProductToDelete(): void {
    this.productsService.getProducts()
      .subscribe((prods: ProductI[]) => this.productsToDelete = prods)
  }

  public deleteProduct(p: ProductI): void {

    this.productsService.deleteProduct(p)
      .subscribe(() => {
        let i = this.productsToDelete.findIndex((prod: ProductI) => prod._id === p._id)
        if (i >= 0) this.productsToDelete.splice(i, 1)
      },
        (err) => console.log(err))
  }

  public loadProductToEdit(): void {
    this.productsService.getProducts()
      .subscribe((prods: ProductI[]) => this.productsToEdit = prods)
  }

  public editProduct(p: ProductI) {
    let newProduct: ProductI = { ...p };
    let dialogRef = this.dialog.open(DialogEditComponent, { width: '400px', data: newProduct });

    dialogRef.afterClosed()
      .subscribe((res: ProductI) => {
        if (res) {
          this.productsService.editProduct(res)
            .subscribe(
              (resp) => {
                let i = this.productsToEdit.findIndex(prod => p._id == prod._id);
                if (i >= 0)
                  this.productsToEdit[i] = resp;
              },
              (err) => console.error(err)
            )
        }
      });
  }

  // UTILIZANDO SUBJECT
  // public editProduct2(p: ProductI) {

  //   let newProduct: ProductI = { ...p };
  //   let dialogRef = this.dialog.open(DialogEditComponent, { width: '400px', data: newProduct });

  //   dialogRef.afterClosed()
  //     .pipe(
  //       filter((prod: ProductI) => prod != undefined),
  //       switchMap((prod: ProductI) => this.productsService.editProduct(prod)))
  //     .subscribe(
  //       (prod: ProductI,) => {
  //         let i = this.productsToEdit.findIndex(p => p._id == prod._id);
  //         if (i >= 0)
  //           this.productsToEdit[i] = prod;
  //       },
  //       (err) => console.error(err)
  //     )
  // }
}
