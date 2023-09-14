import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private notification: NotificationService) { }

  ngOnInit(): void {
    this.notification.GetThenPut();
  }

}
