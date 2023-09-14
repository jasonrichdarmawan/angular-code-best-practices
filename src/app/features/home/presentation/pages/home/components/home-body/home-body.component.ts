import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
