import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() public name: string;
  @Input('otherName') public lastName: string;
  @Input() public person: { name: string, age: string, state: string }

  constructor() { }

  ngOnInit(): void {
  }

}
