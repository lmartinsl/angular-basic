import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnInit {

  public name: string = '';
  public newName: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  public upName(): void {
    this.newName = this.name
    this.name = ''
  }

}
