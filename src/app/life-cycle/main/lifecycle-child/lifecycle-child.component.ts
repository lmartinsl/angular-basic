import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit {

  @Input() public name: string;
  @Input() public age: number;
  @Input() public food: string;

  constructor() { }

  ngOnInit(): void {
  }

}
