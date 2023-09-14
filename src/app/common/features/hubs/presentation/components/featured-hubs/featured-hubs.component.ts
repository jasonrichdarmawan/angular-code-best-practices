import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'featured-hubs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-hubs.component.html',
  styleUrls: ['./featured-hubs.component.scss']
})
export class FeaturedHubsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
