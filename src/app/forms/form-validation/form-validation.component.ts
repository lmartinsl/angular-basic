import { Client } from './../interfaces/client.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  public states: string[] = ['SP', 'PR', 'SC', 'PA']
  public client: Client = {
    firstName: '',
    lastName: '',
    birth: null,
    email: '',
    gender: '',
    street: '',
    city: '',
    state: '',
    phone1: '',
    phone2: ''
  }


  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log(this.client)
  }

}
