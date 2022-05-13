import { Subject, Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

interface DataModel {
  timestamp: number,
  data: number
}

@Component({
  selector: 'app-subjects-child',
  templateUrl: './subjects-child.component.html',
  styleUrls: ['./subjects-child.component.css']
})
export class SubjectsChildComponent implements OnInit {

  @Input() public subject: Subject<DataModel>;
  @Input() public name: string;

  public log: Array<string> = [];
  public connected: boolean = false;
  public subscription: Subscription;


  constructor() { }

  ngOnInit(): void {
  }

  public logData(data: DataModel): void {
    this.log.push(`Timestamp: ${data.timestamp} - Data: ${data.data}`);
  }

  public connect(): void {
    this.log.push('Connected!')
    this.connected = true
    this.subscription = this.subject.subscribe(
      (data: DataModel) => this.logData(data),
      (error) => this.connected = false,
      () => {
        this.connected = false;
        this.log.push('Finished')
      }
    )
  }
  public disconnect(): void { }

}
