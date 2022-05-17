import { catchError, map, retry, retryWhen, tap, timeout } from 'rxjs/operators';
import { Observable, Observer, of, throwError, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public startTest(): void {
    let obj: Observable<any> = new Observable(
      (observer: Observer<any>) => {
        for (let i = 0; i <= 10; i++) {
          if (i == 7) {
            observer.error(`An error occurred when i == ${i}`)
          } else {
            observer.next(i)
          }
        }
      }
    )
    obj
      .pipe(
        map((e) => e * 10),
        tap((e) => console.log('Before error: ' + e)),
        catchError((error) => {
          console.log('Inside CathError: ' + error)
          // return of(0);
          return throwError('ThrowError: Error')
        }),
        // retry(2),
        retryWhen(i => timer(5000))
      )
    // .subscribe(
    //   (e) => console.log('Output: ' + e),
    //   (error) => console.log(error),
    //   () => console.log('Completed!')
    // )

    let obj2: Observable<any> = new Observable(
      (observer: Observer<any>) => {
        timer(2000).subscribe((n) => observer.next(1000))
        timer(2500).subscribe((n) => observer.complete())
      }
    )

    obj2
      .pipe(
        timeout(3000)
      )
      .subscribe(
        (e) => console.log('N: ' + e),
        (error) => console.log(error),
        () => console.log('Completed!')
      )
  }

}
