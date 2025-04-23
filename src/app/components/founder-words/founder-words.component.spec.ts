import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderWordsComponent } from './founder-words.component';

describe('FounderWordsComponent', () => {
  let component: FounderWordsComponent;
  let fixture: ComponentFixture<FounderWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FounderWordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FounderWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
