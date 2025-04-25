import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBrandsComponent } from './light-brands.component';

describe('LightBrandsComponent', () => {
  let component: LightBrandsComponent;
  let fixture: ComponentFixture<LightBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightBrandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
