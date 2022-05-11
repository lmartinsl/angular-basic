import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  public names: Array<string> = ['Lucas', 'Larissa'];
  public cities: Array<any> = [
    { name: 'São Paulo', state: 'UF' },
    { name: 'Porto Alegre', state: 'RS' }
  ]

  public clients: Array<any> = [];

  public name: string = '';
  public address: string = '';
  public phone: string = '';
  public city: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public save(): void {
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        phone: this.phone,
        city: this.city
      }
    )

    this.cancel();
    console.log(this.clients)
  }

  public cancel(): void {
    this.name = '';
    this.address = '';
    this.phone = '';
    this.city = '';
  }

  public delete(idx): void {
    this.clients.splice(idx, 1)
  }

}
