import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChieldComponent } from './parent-chield.component';

describe('ParentChieldComponent', () => {
  let component: ParentChieldComponent;
  let fixture: ComponentFixture<ParentChieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentChieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
