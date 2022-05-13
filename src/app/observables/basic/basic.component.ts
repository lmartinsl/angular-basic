import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  public myObs1: Subscription;
  public myObs2: Subscription;
  public n1: number = 0;
  public n2: number = 0;
  public s1: string = '';
  public s2: string = '';

  constructor() { }

  ngOnInit(): void {
    this.s1 = 'Initializing...'
    this.s2 = 'Initializing...'
    const obs = new Observable(
      (observer: Observer<number>) => {
        observer.next(Math.round(Math.random() * 100))
        observer.next(Math.round(Math.random() * 100))
        observer.next(Math.round(Math.random() * 100))
        observer.error('204')
        observer.complete()
      }
    )

    obs.subscribe(
      (num: number) => console.log(num),
      (error) => console.error(error),
      () => console.log('Completed')
    )

    const myIntervalObs = new Observable(
      (obs: Observer<any>) => {
        let i: number = 0;
        let interval = setInterval(() => {
          i++;
          console.log('From observable: ' + i);
          if (i === 10) {
            obs.complete()
          } else if (i % 2 == 0) {
            obs.next(i)
          }
        }, 500);
        return () => {
          clearInterval(interval)
        }
      }
    )

    this.myObs1 = myIntervalObs.subscribe(
      (r) => this.n1 = r,
      (error) => this.s1 = 'Error',
      () => this.s1 = 'Completed'
    );

    this.myObs2 = myIntervalObs.subscribe(
      (r) => this.n2 = r,
      (error) => this.s2 = 'Error',
      () => this.s2 = 'Completed'
    );

    setTimeout(() => {
      this.myObs1.unsubscribe()
      this.myObs2.unsubscribe()
    }, 10000)
  }

}
