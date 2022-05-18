import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMergeComponent } from './switch-merge.component';

describe('SwitchMergeComponent', () => {
  let component: SwitchMergeComponent;
  let fixture: ComponentFixture<SwitchMergeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchMergeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
