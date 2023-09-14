import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedExperiencesComponent } from './featured-experiences.component';

describe('FeaturedExperiencesComponent', () => {
  let component: FeaturedExperiencesComponent;
  let fixture: ComponentFixture<FeaturedExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FeaturedExperiencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
