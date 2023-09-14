import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dashboard-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
