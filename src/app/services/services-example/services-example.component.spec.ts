import { ServicesExampleComponent } from './services-example.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('ServicesComponent', () => {
  let component: ServicesExampleComponent;
  let fixture: ComponentFixture<ServicesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesExampleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
