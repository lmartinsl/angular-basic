import { GenRandomDataService } from './gen-random-data.service';
import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs'

interface DataModel {
  timestamp: number,
  data: number
}

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  public subject: Subject<DataModel>
  public replaySubject: ReplaySubject<DataModel>
  public asyncSubject: AsyncSubject<DataModel>
  public behaviorSubject: BehaviorSubject<DataModel>

  constructor(private genRandomDataService: GenRandomDataService) { }

  ngOnInit(): void {
    // let s: Subject<number> = new Subject<number>();
    // s.subscribe(
    //   (n) => console.log(n),
    //   (error) => console.error(error),
    //   () => console.log('Completed')
    // );
    // s.next(Math.round(Math.random() * 100))
    // s.complete()

    //////////////////////////////////////////////

    this.subject = new Subject<DataModel>()
    this.replaySubject = new ReplaySubject<DataModel>()
    this.asyncSubject = new AsyncSubject<DataModel>()
    this.behaviorSubject = new BehaviorSubject<DataModel>({ timestamp: 0, data: 0 })

    this.genRandomDataService.dataObs.subscribe(this.subject);
    this.genRandomDataService.dataObs.subscribe(this.replaySubject);
    this.genRandomDataService.dataObs.subscribe(this.asyncSubject);
    this.genRandomDataService.dataObs.subscribe(this.behaviorSubject);
  }

  public connect(): void {
    this.genRandomDataService.dataObs.connect()
  }

}
