import { delay, map, toArray } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  public options$: Observable<Array<string>>;
  public users$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.options$ = Observable.create(
      (observer: Observer<any>) => {
        for (let i = 0; i <= 10; i++) {
          observer.next(`This is my ${i} option!`)
        }
        observer.complete()
      }
    )
      .pipe(
        map(s => s + '!'),
        toArray(),
        delay(1000)
      )

    // this.options$.subscribe(s => console.log(s))

    this.users$ = new Observable<any>(
      (observer: Observer<any>) => {
        let names = ['Lucas', 'Larissa']
        let logins = ['lml', 'lari']
        let i = 0
        setInterval(() => {
          if (i === names.length) {
            observer.complete()
          } else {
            observer.next({ login: logins[i], name: names[i] })
          }
          i++
        }, 3500)
      }
    )

    // this.users$.subscribe(s => console.log(s))
  }

}
