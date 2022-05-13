import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-cold-observables',
  templateUrl: './cold-observables.component.html',
  styleUrls: ['./cold-observables.component.css']
})
export class ColdObservablesComponent implements OnInit {

  /**
   * Cold-observables se dá ao fator de que um mesmo observable
   * produz fontes de dados diferentes.
   */

  public myObs1: Subscription;
  public myObs2: Subscription;
  public n1: number = 0;
  public n2: number = 0;
  public s1: string = '';
  public s2: string = '';

  constructor() { }

  ngOnInit(): void {

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

    this.s1 = 'Waiting for interval...'
    this.myObs1 = myIntervalObs.subscribe(
      (r) => this.n1 = r,
      (error) => this.s1 = 'Error',
      () => this.s1 = 'Completed'
    );

    this.s2 = 'Waiting for interval...'
    setInterval(() => {
      this.myObs2 = myIntervalObs.subscribe(
        (r) => this.n2 = r,
        (error) => this.s2 = 'Error',
        () => this.s2 = 'Completed'
      );
    }, 3000)


    setTimeout(() => {
      this.myObs1.unsubscribe()
      this.myObs2.unsubscribe()
    }, 5000)
  }

}

