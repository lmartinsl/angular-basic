import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public foods: Array<string> = ['Rice', 'Beans', 'Pizza'];
  public clients: Array<any> = [];
  public name: string;
  public age: number;
  public food: string;
  public editClient: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  public save(): void {
    if (!this.editClient) {
      this.clients.push(
        { name: this.name, age: this.age, food: this.food }
      )
    }
    this.clearFields();
  }

  public clearFields(): void {
    this.name = ''
    this.age = null
    this.food = ''
  }

}
