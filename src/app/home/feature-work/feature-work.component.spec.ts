import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureWorkComponent } from './feature-work.component';

describe('FeatureWorkComponent', () => {
  let component: FeatureWorkComponent;
  let fixture: ComponentFixture<FeatureWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
