import { Injectable } from '@angular/core';
import { ConnectableObservable, Observer, Observable } from 'rxjs';
import { publish } from 'rxjs/operators'

interface DataModel {
  timestamp: number,
  data: number
}

@Injectable({
  providedIn: 'root'
})
export class GenRandomDataService {

  public dataObs: ConnectableObservable<DataModel>;

  constructor() {
    this.dataObs = new Observable(
      (observer: Observer<DataModel>) => {
        let n = 0;
        console.log('Observable created!');
        let f = () => {
          n++;
          console.log(n);
          if (n <= 10) {
            let timestamp = Math.round(Math.random() * 2000 + 500);
            observer.next({ timestamp, data: n })
            setTimeout(f, timestamp)
          } else {
            observer.complete();
          }
        }
        f()
      }
    ).pipe(publish()) as ConnectableObservable<DataModel>
  }
}
