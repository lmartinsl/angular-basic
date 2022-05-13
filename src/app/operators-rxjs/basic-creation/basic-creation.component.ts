import { from, Observable, Observer, of, interval, timer, Subscription, fromEvent } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-creation',
  templateUrl: './basic-creation.component.html',
  styleUrls: ['./basic-creation.component.css']
})
export class BasicCreationComponent implements OnInit {

  public subscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
  }

  public obsCreate(): void {
    const hello = Observable.create(
      (observer: Observer<any>) => {
        observer.next('Hello, Operators!')
        observer.complete()
      })

    this.subscription.add(
      hello.subscribe(
        (v) => console.log(v),
        () => console.log('Completed!')
      )
    )

  }

  public fromClick(): void {
    const fromEl = from([1, 2, 3, 4, 5])
    this.subscription.add(
      fromEl.subscribe((v) => console.log(v))
    )
  }

  public ofClick(): void {
    const ofEl = of([1, 2, 3, 4, 5])
    this.subscription.add(
      ofEl.subscribe((v) => console.log(v))
    )
  }

  public intervalClick(): void {
    const source = interval(500)
    this.subscription.add(
      source.subscribe((v) => console.log(v))
    )
  }

  public timerClick(): void {
    // const source = timer(1000)
    const source = timer(3000, 1000)
    this.subscription.add(
      source.subscribe((v) => console.log(v))
    )
  }

  public fromEventClick(): void {
    const subscription = fromEvent(document, 'click')

    this.subscription.add(
      subscription.subscribe((e) => console.log(e))
    )
  }

  public unsubscribe(): void {
    this.subscription.unsubscribe();
    this.subscription = new Subscription();
  }


}
