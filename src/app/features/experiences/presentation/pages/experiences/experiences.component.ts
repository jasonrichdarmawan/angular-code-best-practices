import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedExperiencesComponent } from '../../../../../common/features/experiences/presentation/components/featured-experiences/featured-experiences.component';
import { ExperiencesListComponent } from '../../../../../common/features/experiences/presentation/components/experiences-list/experiences-list.component';

@Component({
  selector: 'experiences',
  standalone: true,
  imports: [CommonModule, FeaturedExperiencesComponent, ExperiencesListComponent],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
