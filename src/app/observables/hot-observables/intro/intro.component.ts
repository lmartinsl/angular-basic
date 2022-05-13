import { fromEvent, Observable, Observer } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit, AfterViewInit {

  @ViewChild('myButton', { read: ElementRef }) public button: ElementRef<any>;

  public n1: number = 0;
  public n2: number = 0;
  public s1: string = '';
  public s2: string = '';

  constructor() {
  }

  ngOnInit(): void {

    class Producer {
      private myListener = [];
      private n = 0;
      public interval;

      addListener(l) {
        this.myListener.push(l)
      }

      start() {
        this.interval = setInterval(() => {
          this.n++;
          console.log('From Producer: ' + this.n);
          for (let l of this.myListener) {
            l(this.n)
          }
        }, 1000)
      }

      stop() {
        clearInterval(this.interval)
      }

    }

    let prod: Producer = new Producer();
    prod.start()
    setTimeout(() => {
      prod.addListener((n) => console.log('From listener1: ' + n))
      prod.addListener((n) => console.log('From listener2: ' + n))
    }, 5000)

    const myHotObs = new Observable(
      (obs: Observer<number>) => {
        prod.addListener((n) => obs.next(n))
      }
    )

    myHotObs.subscribe((r) => {
      console.log('From subscribe1: ' + r)
      console.log('From subscribe2: ' + r)
    })

  }

  ngAfterViewInit(): void {
    let myBtnObs: Observable<any> = fromEvent(
      this.button.nativeElement, 'click'
    )

    myBtnObs.subscribe((e) => console.log('clicked1'))
    myBtnObs.subscribe((e) => console.log('clicked2'))
  }

}
