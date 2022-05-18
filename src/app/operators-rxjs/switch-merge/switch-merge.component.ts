import { map, mergeAll, mergeMap, switchAll, switchMap, debounceTime } from 'rxjs/operators';
import { Observable, fromEvent, of } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-switch-merge',
  templateUrl: './switch-merge.component.html',
  styleUrls: ['./switch-merge.component.css']
})
export class SwitchMergeComponent implements OnInit {

  @ViewChild('searchBy', { static: true }) public el: ElementRef

  public searchInput: string = ''
  public people$: Observable<any>

  private readonly url: string = 'http://localhost:9000'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.firstOption()
    // this.secondOption()
    this.thirdOption()
  }

  public filterPeople(searchInput: string): Observable<Array<any>> {
    if (searchInput.length === 0) {
      return of([])
    } else {
      return this.http.get<Array<any>>(`${this.url}/${searchInput}`)
    }
  }

  public firstOption(): void {
    fromEvent(this.el.nativeElement, 'keyup')
      .subscribe(() => {
        this.filterPeople(this.searchInput)
          .subscribe((e) => console.log(e))
      })
  }

  public secondOption(): void {
    let keyup$ = fromEvent(this.el.nativeElement, 'keyup')

    // let fetch$ = keyup$.pipe(map(() => this.filterPeople(this.searchInput)))
    // this.people$ = fetch$.pipe(mergeAll())

    this.people$ = keyup$.pipe(mergeMap(() => this.filterPeople(this.searchInput)))
  }

  public thirdOption(): void {

    let keyup$ = fromEvent(this.el.nativeElement, 'keyup')

    // this.people$ = keyup$
    //   .pipe(
    //     map(() => this.filterPeople(this.searchInput)),
    //     switchAll()
    //   )

    this.people$ = keyup$
      .pipe(
        debounceTime(700),
        switchMap(() => this.filterPeople(this.searchInput))
      )
  }

}
