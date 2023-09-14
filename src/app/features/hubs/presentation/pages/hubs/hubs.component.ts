import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedHubsComponent } from 'src/app/common/features/hubs/presentation/components/featured-hubs/featured-hubs.component';
import { HubsListComponent } from 'src/app/common/features/hubs/presentation/components/hubs-list/hubs-list.component';

@Component({
  selector: 'hubs',
  standalone: true,
  imports: [CommonModule, FeaturedHubsComponent, HubsListComponent],
  templateUrl: './hubs.component.html',
  styleUrls: ['./hubs.component.scss']
})
export class HubsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
