import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  public name: string = '';
  public lastName: string = ''

  public client: any = {
    firstName: 'Lucas',
    lastName: 'Martins',
    address: 'Toledo Malta',
    age: '27'
  }

  constructor() { }

  ngOnInit(): void {
  }
}
