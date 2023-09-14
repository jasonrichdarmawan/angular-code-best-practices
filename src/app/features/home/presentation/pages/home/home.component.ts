import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeBodyComponent } from './components/home-body/home-body.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeHeaderComponent, HomeBodyComponent, HomeFooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
