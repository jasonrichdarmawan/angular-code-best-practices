import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedHubsComponent } from './featured-hubs.component';

describe('FeaturedHubsComponent', () => {
  let component: FeaturedHubsComponent;
  let fixture: ComponentFixture<FeaturedHubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FeaturedHubsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedHubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
