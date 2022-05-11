import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  public miliseconds: number = 0;
  private interval: any;
  public running: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public start(): void {
    if (!this.running) {
      this.interval = setInterval(() => {
        this.miliseconds += 50;
      }, 50)
      this.running = true
    }
  }
  public stop(): void {
    if (this.running) {
      clearInterval(this.interval)
      this.running = false;
    }
  }
  public clear(): void {
    this.miliseconds = 0;
  }

  public round(n: number): number {
    return Math.round(n);
  }

}
