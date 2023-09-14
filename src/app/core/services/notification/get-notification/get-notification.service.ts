import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetNotificationService {

  constructor() { }

  get(): boolean { return true }
}
