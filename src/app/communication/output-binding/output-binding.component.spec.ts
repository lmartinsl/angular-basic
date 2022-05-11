import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputBindingComponent } from './output-binding.component';

describe('OutputBindingComponent', () => {
  let component: OutputBindingComponent;
  let fixture: ComponentFixture<OutputBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
