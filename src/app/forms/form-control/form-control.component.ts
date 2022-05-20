import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  public firstName = new FormControl('')
  public lastName = new FormControl('')

  constructor() { }

  ngOnInit(): void {
    this.firstName.valueChanges
      .subscribe((e) => console.log(e))
  }

  public setFirstName(): void {
    this.firstName.setValue('Adam!')
  }

}
