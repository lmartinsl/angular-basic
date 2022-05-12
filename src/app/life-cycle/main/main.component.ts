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
  public editClient: number = -1;
  public random: number;

  constructor() {
    this.generateRandom();
  }

  ngOnInit(): void {
  }

  public generateRandom(): void {
    this.random = Math.round((Math.random() * 1000))
  }

  public save(): void {
    if (this.editClient == -1) {
      this.clients.push(
        { name: this.name, age: this.age, food: this.food }
      )
    } else {
      this.clients[this.editClient].name = this.name
      this.clients[this.editClient].age = this.age
      this.clients[this.editClient].food = this.food
      this.editClient = -1;
    }
    this.clearFields();
  }

  public clearFields(): void {
    this.name = ''
    this.age = null
    this.food = ''
  }

  public remove(idx: number): void {
    this.clients.splice(idx, 1);
  }

  public edit(idx: number): void {
    this.name = this.clients[idx].name;
    this.age = this.clients[idx].age;
    this.food = this.clients[idx].food;
    this.editClient = idx;
  }

}
