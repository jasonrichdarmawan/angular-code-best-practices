import { TestBed } from '@angular/core/testing';

import { PutNotificationService } from './put-notification.service';

describe('PutNotificationService', () => {
  let service: PutNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
