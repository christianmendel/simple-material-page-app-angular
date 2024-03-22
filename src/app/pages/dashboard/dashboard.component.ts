import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { NgChartsModule } from 'ng2-charts';
import { ContainerComponent } from '../../components/container/container.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ToolbarComponent, MatTableModule, ContainerComponent,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule, NgChartsModule,
    MatCardModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  data = {
    labels: [
      'Pago',
      'Pendende',
      'Atrasado'
    ],
    datasets: [{
      label: 'Payment Status ',
      data: [3, 1, 2],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  config = {
    type: 'doughnut',
    data: this.data,
  };
  options = {
    plugins: {
      colors: {
        forceOverride: true
      }
    }
  };
}
