import { Service2Service } from './../service2.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  public num: number = 0;

  constructor(private service2Service: Service2Service) {
    this.num = service2Service.num
  }

  ngOnInit(): void {
  }

}
