import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamProjectComponent } from './dream-project.component';

describe('DreamProjectComponent', () => {
  let component: DreamProjectComponent;
  let fixture: ComponentFixture<DreamProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreamProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreamProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
