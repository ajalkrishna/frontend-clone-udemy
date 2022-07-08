import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeBannerComponent } from './customize-banner.component';

describe('CustomizeBannerComponent', () => {
  let component: CustomizeBannerComponent;
  let fixture: ComponentFixture<CustomizeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
