import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHeaderComponent } from './presentation/pages/dashboard/components/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './presentation/pages/dashboard/components/dashboard-footer/dashboard-footer.component';
import { DashboardComponent } from './presentation/pages/dashboard/dashboard.component';
import { GetNotificationService } from 'src/app/core/services/notification/get-notification/get-notification.service';
import { PutNotificationService } from 'src/app/core/services/notification/put-notification/put-notification.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardHeaderComponent,
    DashboardFooterComponent,
  ],
  providers: [
    GetNotificationService, PutNotificationService, NotificationService
  ]
})
export class DashboardModule { }
