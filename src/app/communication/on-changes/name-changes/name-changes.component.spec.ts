import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameChangesComponent } from './name-changes.component';

describe('NameChangesComponent', () => {
  let component: NameChangesComponent;
  let fixture: ComponentFixture<NameChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
