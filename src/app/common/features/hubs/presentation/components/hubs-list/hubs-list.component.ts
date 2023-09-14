import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hubs-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hubs-list.component.html',
  styleUrls: ['./hubs-list.component.scss']
})
export class HubsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
