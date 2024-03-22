import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNotificationsComponent } from './dialog-notifications.component';

describe('DialogNotificationsComponent', () => {
  let component: DialogNotificationsComponent;
  let fixture: ComponentFixture<DialogNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogNotificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
