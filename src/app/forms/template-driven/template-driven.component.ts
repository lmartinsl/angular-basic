import { Client } from './../interfaces/client.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  public states: string[] = ['SP', 'PR', 'SC', 'PA']
  public client: Client = {
    firstName: '',
    lastName: '',
    birth: null,
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
