import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaSliderComponent } from './qa-slider.component';

describe('ImageSliderComponent', () => {
  let component: QaSliderComponent;
  let fixture: ComponentFixture<QaSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QaSliderComponent]
    });
    fixture = TestBed.createComponent(QaSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
