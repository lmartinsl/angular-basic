import { TimerComponent } from './timer/timer.component';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent-chield',
  templateUrl: './parent-chield.component.html',
  styleUrls: ['./parent-chield.component.css']
})
export class ParentChieldComponent implements OnInit, AfterViewInit {

  @ViewChild('timerWatchTwo') private myTimer: TimerComponent;

  @ViewChild('myP') private myP: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  public start(): void {
    this.myTimer.start()
  }
  public stop(): void {
    this.myTimer.stop()
  }
  public clear(): void {
    this.myTimer.clear()
  }

  // Chamado assim que todos o componentes internos forem inicializados.
  ngAfterViewInit(): void {
    console.log(this.myP)
  }

}
