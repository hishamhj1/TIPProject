import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatepageComponent } from './calculatepage.component';

describe('CalculatepageComponent', () => {
  let component: CalculatepageComponent;
  let fixture: ComponentFixture<CalculatepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatepageComponent]
    });
    fixture = TestBed.createComponent(CalculatepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
