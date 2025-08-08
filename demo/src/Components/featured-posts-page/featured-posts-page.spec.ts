import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPostsPage } from './featured-posts-page';

describe('FeaturedPostsPage', () => {
  let component: FeaturedPostsPage;
  let fixture: ComponentFixture<FeaturedPostsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedPostsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
