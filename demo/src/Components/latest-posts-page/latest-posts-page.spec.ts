import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostsPage } from './latest-posts-page';

describe('LatestPostsPage', () => {
  let component: LatestPostsPage;
  let fixture: ComponentFixture<LatestPostsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestPostsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
