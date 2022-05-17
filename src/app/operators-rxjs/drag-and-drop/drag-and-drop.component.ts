import { takeUntil } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  @ViewChild('myRect', { static: true }) public myRect: ElementRef;

  public top: number = 0;
  public left: number = 0;

  constructor() { }

  ngOnInit(): void {
    let mouseDown = fromEvent(this.myRect.nativeElement, 'mousedown')
    let mouseMove = fromEvent(document, 'mousemove')
    let mouseUp = fromEvent(document, 'mouseup')

    mouseDown.subscribe((ed: MouseEvent) => {
      let x = ed.pageX
      let y = ed.pageY

      mouseMove
        .pipe(
          takeUntil(mouseUp)
        )
        .subscribe((em: MouseEvent) => {
          let offsetX = x - em.pageX
          let offsetY = y - em.pageY
          this.top -= offsetY
          this.left -= offsetX
          x = em.pageX
          y = em.pageY
        })
    })
  }

}
