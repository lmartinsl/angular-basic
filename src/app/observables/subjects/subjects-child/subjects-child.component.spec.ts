import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsChildComponent } from './subjects-child.component';

describe('SubjectsChildComponent', () => {
  let component: SubjectsChildComponent;
  let fixture: ComponentFixture<SubjectsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
