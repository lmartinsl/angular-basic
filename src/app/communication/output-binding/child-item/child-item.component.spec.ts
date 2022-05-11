import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildItemComponent } from './child-item.component';

describe('ChildItemComponent', () => {
  let component: ChildItemComponent;
  let fixture: ComponentFixture<ChildItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
