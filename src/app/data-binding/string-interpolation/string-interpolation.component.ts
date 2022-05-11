import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  public person = {
    name: 'Lucas',
    lastName: 'Lima',
    age: '27',
    address: 'Brazil'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
