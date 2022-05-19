import { ProductI } from './../interfaces/product.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {

  public product: ProductI = { _id: '', name: '', department: '', price: 0 }

  constructor(
    public dialogRef: MatDialogRef<DialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public p: ProductI,
  ) {
    this.product = p;
  }

  ngOnInit(): void {
  }

  public cancel(): void {
    this.dialogRef.close()
  }

}
