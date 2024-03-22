import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ContainerComponent, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) {}

  hide = true;

  login() {
    this.router.navigate(["/dashboard"])

  }

  navigateRegister() {
    this.router.navigate(["/register"])
  }

  submit(event: SubmitEvent) {
    event.preventDefault()
  }
}
