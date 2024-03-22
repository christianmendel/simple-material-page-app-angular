import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-notifications',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialog-notifications.component.html',
  styleUrl: './dialog-notifications.component.scss'
})
export class DialogNotificationsComponent {

}
