import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlock1Component } from './home-block1.component';

describe('HomeBlock1Component', () => {
  let component: HomeBlock1Component;
  let fixture: ComponentFixture<HomeBlock1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBlock1Component]
    });
    fixture = TestBed.createComponent(HomeBlock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
