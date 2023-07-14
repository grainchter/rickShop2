import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlock4Component } from './home-block4.component';

describe('HomeBlock4Component', () => {
  let component: HomeBlock4Component;
  let fixture: ComponentFixture<HomeBlock4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBlock4Component]
    });
    fixture = TestBed.createComponent(HomeBlock4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
