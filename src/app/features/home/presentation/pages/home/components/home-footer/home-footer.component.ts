import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss']
})
export class HomeFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
