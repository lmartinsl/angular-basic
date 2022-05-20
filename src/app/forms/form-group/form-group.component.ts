import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  public formClient = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    name: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    })
  })

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    console.log(this.formClient.value)
    console.log(
      `
        Name: ${this.formClient.value.firstName}
        Last Name: ${this.formClient.value.lastName}
        ---------------------------
        First / First Name: ${this.formClient.value.name.firstName}
        Last / Last Name: ${this.formClient.value.name.lastName}
      `
    )
  }

}
