import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlock3Component } from './home-block3.component';

describe('HomeBlock3Component', () => {
  let component: HomeBlock3Component;
  let fixture: ComponentFixture<HomeBlock3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBlock3Component]
    });
    fixture = TestBed.createComponent(HomeBlock3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
