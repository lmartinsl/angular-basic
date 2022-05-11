import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public name: string;
  public age: number;
  public clients: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  public save(): void {

    if (this.name && this.age)

      this.clients.push(
        { name: this.name, age: this.age }
      )

    this.clearFields();
  }

  public clearFields(): void {
    this.name = '';
    this.age = null;
  }

  public deleteClient(idx: number): void {
    this.clients.splice(idx, 1);
  }

  public updateClient(client: any, i: number): void {
    const { name, age } = client
    this.clients[i].name = name
    this.clients[i].age = age
  }

}
