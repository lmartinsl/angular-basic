import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateComponent } from './ng-template.component';

describe('NgTemplateComponent', () => {
  let component: NgTemplateComponent;
  let fixture: ComponentFixture<NgTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
