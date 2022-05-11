import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBindingComponent } from './input-binding.component';

describe('InputBindingComponent', () => {
  let component: InputBindingComponent;
  let fixture: ComponentFixture<InputBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
