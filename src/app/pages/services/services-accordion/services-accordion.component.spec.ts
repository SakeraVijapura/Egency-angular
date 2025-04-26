import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAccordionComponent } from './services-accordion.component';

describe('ServicesAccordionComponent', () => {
  let component: ServicesAccordionComponent;
  let fixture: ComponentFixture<ServicesAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
