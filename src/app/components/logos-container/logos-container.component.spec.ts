import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosContainerComponent } from './logos-container.component';

describe('LogosContainerComponent', () => {
  let component: LogosContainerComponent;
  let fixture: ComponentFixture<LogosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogosContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
