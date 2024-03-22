import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "settings", component: SettingsComponent },
];
