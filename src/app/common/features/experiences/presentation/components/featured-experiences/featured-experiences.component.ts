import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'featured-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-experiences.component.html',
  styleUrls: ['./featured-experiences.component.scss']
})
export class FeaturedExperiencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
