import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'experiences-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.scss']
})
export class ExperiencesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
