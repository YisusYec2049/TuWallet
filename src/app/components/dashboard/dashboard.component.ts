import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule para habilitar directivas como *ngFor
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  transactions = [
    { type: 'Ingreso', amount: 100, description: 'Salario', date: '2024-11-19' },
    { type: 'Gasto', amount: 50, description: 'Comida', date: '2024-11-18' },
  ];
}
