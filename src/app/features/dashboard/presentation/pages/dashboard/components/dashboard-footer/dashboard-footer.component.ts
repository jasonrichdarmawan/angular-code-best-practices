import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dashboard-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-footer.component.html',
  styleUrls: ['./dashboard-footer.component.scss']
})
export class DashboardFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
