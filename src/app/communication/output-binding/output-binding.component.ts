import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-binding',
  templateUrl: './output-binding.component.html',
  styleUrls: ['./output-binding.component.css']
})
export class OutputBindingComponent implements OnInit {

  public title: string = 'Angular'
  public value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public alterateTitle(): void {
    this.title = 'Output Binding'
  }

  public inc(n: number): void {
    this.value += n
  }


}
