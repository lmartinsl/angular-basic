import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent implements OnInit {

  @Input() public client: any;
  @Output() public updateClient: EventEmitter<any> = new EventEmitter<any>();
  @Output() public removeClient: EventEmitter<any> = new EventEmitter<any>();

  public onEdit: boolean = false;
  public name: string;
  public age: number;

  constructor() { }

  ngOnInit(): void {
  }

  public edit(): void {
    this.onEdit = true;
    this.name = this.client.name
    this.age = this.client.age
  }

  public remove(): void {
    this.removeClient.emit();
  }

  public save(): void {
    this.updateClient.emit({ name: this.name, age: this.age })
    this.onEdit = false;
  }

}
