import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkBrandsComponent } from './dark-brands.component';

describe('DarkBrandsComponent', () => {
  let component: DarkBrandsComponent;
  let fixture: ComponentFixture<DarkBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkBrandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
