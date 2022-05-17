import { takeUntil } from 'rxjs/operators';
import { interval, fromEvent, Subscription, Subject } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit, OnDestroy {

  public subscriptionsAreActive: boolean = false;
  private subscriptions: Subscription[] = []
  private unsubscribeAll$: Subject<any> = new Subject<any>();

  constructor() { }

  ngOnInit(): void {
    this.checkSubscriptions()
  }

  public checkSubscriptions(): void {
    interval(500)
      .subscribe(() => {
        let active = false
        this.subscriptions.forEach((e) => {
          if (!e.closed) {
            active = true
          }
        })
        this.subscriptionsAreActive = active
      })
  }

  public subscribe(): void {
    const subs1 = interval(500)
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe((e) => console.log(e))
    const subs2 = fromEvent(document, 'click')
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe((e) => console.log(e))
    this.subscriptions.push(subs1, subs2)
  }

  public unsubscribe(): void {
    this.unsubscribeAll$.next();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
  }

}
