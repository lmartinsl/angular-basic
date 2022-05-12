import { Service1 } from './../service1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  // providers: [Service1],
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public num: number = 0;

  constructor(private service1: Service1) { }

  ngOnInit(): void {
    this.num = this.service1.num
  }

}
