import { Service3Service } from './../../service3.service';
import { Service1 } from './../service1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  // providers: [Service1],
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public num: number = 0;
  public text: string;

  constructor(
    private service1: Service1,
    private service3Service: Service3Service
  ) { }

  ngOnInit(): void {
    this.num = this.service1.num
    this.text = this.service3Service.text
  }

}
