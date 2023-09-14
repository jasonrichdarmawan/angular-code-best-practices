import { Injectable } from '@angular/core';
import { GetNotificationService } from './get-notification/get-notification.service';
import { PutNotificationService } from './put-notification/put-notification.service';

@Injectable()
export class NotificationService {

  constructor(private get: GetNotificationService, private put: PutNotificationService) { }

  GetThenPut(): boolean {
    console.log(this.GetThenPut.name)
    
    if (!this.get.get()) { return false }
    if (!this.put.put()) { return false }

    return true
  }
}
