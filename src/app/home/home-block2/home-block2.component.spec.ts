import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlock2Component } from './home-block2.component';

describe('HomeBlock2Component', () => {
  let component: HomeBlock2Component;
  let fixture: ComponentFixture<HomeBlock2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBlock2Component]
    });
    fixture = TestBed.createComponent(HomeBlock2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
