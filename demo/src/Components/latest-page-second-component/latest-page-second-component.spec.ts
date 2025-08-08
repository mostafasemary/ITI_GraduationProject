import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPageSecondComponent } from './latest-page-second-component';

describe('LatestPageSecondComponent', () => {
  let component: LatestPageSecondComponent;
  let fixture: ComponentFixture<LatestPageSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestPageSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestPageSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
