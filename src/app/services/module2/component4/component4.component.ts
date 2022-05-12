import { Service2Service } from './../service2.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

  public num: number = 0;

  constructor(private service2Service: Service2Service) {
    this.num = service2Service.num
  }

  ngOnInit(): void {
  }

}
