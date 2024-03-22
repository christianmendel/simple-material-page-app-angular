import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { DialogNotificationsComponent } from '../dialog-notifications/dialog-notifications.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatBadgeModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  constructor(private dialog: MatDialog, private router: Router) { }

  openNotificationsDialog() {
    this.dialog.open(DialogNotificationsComponent);
  }

  logout() {
    this.router.navigate(["/"])
  }

  navList = [
    { path: "/dashboard", icon: "dashboard", label: "Dashboard" },
    { path: "/settings", icon: "settings", label: "Settings" },
  ]

}
