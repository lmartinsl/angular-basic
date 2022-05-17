import { Component, OnInit, ViewChild } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { Observable, Observer, Subscription, Subject, interval, timer, from, fromEvent } from 'rxjs';
import { debounceTime, filter, first, last, map, take, takeUntil, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  @ViewChild(MatRipple) public ripple: MatRipple;

  public searchInput: string = '';
  public searchEntry$: Subject<string> = new Subject<string>();
  public textDebounce: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public mapClick(): void {
    from([1, 2, 3, 4, 5, { name: 'Lucas', lastName: 'Lima' }])
      .pipe(
        map((el: any) => {
          return `${typeof el === 'object' ? el.name + ' ' + el.lastName : Number(el)}`
        })
      )
      .subscribe((r) => console.log(r))
  }

  public filterClick(): void {

    from([1, 2, 3, 4, 5])
      .pipe(
        filter((el) => el % 2 === 1),
        map((el) => `Just impares numbers ${el}`)
      )
      .subscribe((el) => console.log(el))

  }

  public tapClick(): void {
    from([1, 2, 3, 4, 5])
      .pipe(
        tap((el) => console.log(el))
      )
      .subscribe()
  }

  public takeClick(): void {
    const obs = new Observable((observer: Observer<any>) => {
      let i;
      for (i = 0; i <= 20; i++) {
        setTimeout(() => observer.next(Math.floor(Math.random() * 100)), i * 100)
      }
      setTimeout(() => observer.complete(), i * 100)
    });

    const s: Subscription = obs.pipe(
      tap((el) => console.log('Before subscribe: ' + el)),
      take(10)
    ).subscribe((el) => console.log('Output: ' + el))
  }

  public firstClick(): void {
    const obs = new Observable((observer: Observer<any>) => {
      let i;
      for (i = 0; i <= 20; i++) {
        setTimeout(() => observer.next(Math.floor(Math.random() * 100)), i * 100)
      }
      setTimeout(() => observer.complete(), i * 100)
    });

    const s: Subscription = obs.pipe(
      tap((el) => console.log('Before subscribe: ' + el)),
      first()
    ).subscribe((el) => console.log('Output: ' + el))
  }

  public lastClick(): void {
    const obs = new Observable((observer: Observer<any>) => {
      let i;
      for (i = 0; i <= 20; i++) {
        setTimeout(() => observer.next(Math.floor(Math.random() * 100)), i * 100)
      }
      setTimeout(() => observer.complete(), i * 100)
    });

    const s: Subscription = obs.pipe(
      tap((el) => console.log('Before subscribe: ' + el)),
      last()
    ).subscribe((el) => console.log('Output: ' + el))
  }

  public debounceTimeClick(): void {
    fromEvent(document, 'click')
      .pipe(
        debounceTime(1000)
      )
      .subscribe((el: MouseEvent) => {
        console.log(el)
        this.launchRipple()
      })
  }

  public launchRipple(): void {
    const rippleRef = this.ripple.launch({
      persistent: true,
      centered: true,
    })

    rippleRef.fadeOut()
  }

  public takeWhile(): void {

    interval(500)
      .pipe(
        takeWhile((value, i) => (value <= 5))
      )
      .subscribe((el) => console.log('takeWhile: ' + el))

  }

  public takeUntil(): void {

    let dueTime$ = timer(5000)

    interval(500)
      .pipe(
        takeUntil(dueTime$)
      )
      .subscribe((el) => console.log('takeUntil: ' + el))

  }


  public searchBy(event: any): void {
    this.searchEntry$.next(this.searchInput)
  }

  public debounceTimeSearch(): void {
    this.searchEntry$
      .pipe(
        map((el) => el.trim().toLocaleUpperCase()),
        debounceTime(200)
      )
      .subscribe((el) => {
        this.textDebounce = el
        console.log(typeof el)
      })
  }
}
